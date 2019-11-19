
const webpackConfig = require('./webpack.config.js');
const util = require('./util')

const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');
const app = express();

const async = require('async')
const mongojs = require("mongojs")
const config = require("./config")


var isDev = process.env.NODE_ENV == 'development';
console.log('模式: ', process.env.NODE_ENV);

var maxAge = 30 * 60 * 10000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    name: 'my',
    secret: '12345',
    cookie: {maxAge },
    resave: true,
    saveUninitialized: false
}));

const compression = require("compression");
app.use(compression());



app.use(function(req, res, next) {
  console.log(req.path)
  if(req.session.user) {
    res.cookie('islogin', '1', { maxAge, httpOnly: false }) 
    
    req.session._garbage = Date();
    req.session.touch();
  } else {
    res.clearCookie('islogin');
  }

  next();
});

// 首页禁止缓存
app.get(/^\/$/, (req, res, next) => {
  console.log('地址', req.path)
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0"); // Proxies.
  next();
});

app.get(/\.(js|css|png)$/, (req, res, next) => {
  res.setHeader("Cache-Control", `max-age=${86400 * 7}`); // HTTP 1.1.
  res.setHeader("Expires", "10d"); // Proxies.
  next();
});



app.get('/', function(req, res, next) {

  next();

  return;
  if(req.session.user) {
    next();
  } else {
    res.redirect('/login.html')
  }
})

app.post('/login', async function (req, res) {
  var user = await new Promise(function(resolve, reject) {
    login({
      uid: req.body.uid,//'18610346767',
      pwd: util.decrypt(req.body.pwd, 'efvj40$#9gr#idfijp43k2fdna;kwe')//'123456'
    }, function(x, user) {
      resolve(user);
    })
  })

  res.cookie('islogin', '1', { maxAge, httpOnly: false }) 

  req.session.user = JSON.stringify(user);
  res.end(JSON.stringify(user));
})

app.get('/logout', function(req, res) {

  console.log('logout')
  req.session.user = null;
  res.clearCookie('islogin');
  res.redirect('/login.html');
})
/* 

app.use(proxy('/api/**', {
  target: 'http://192.168.100.131:8080',
  changeOrigin: false,
  cookieDomainRewrite: false
})); */


app.use('/api/**', function(req, res) {

  if(!req.session.user) {
    res.end(JSON.stringify({
      suc: false,
      msg: '请重新登录'
    }))
    return;
  }
  return proxy({
    target: 'http://192.168.100.131:8080',
    changeOrigin: false,
    cookieDomainRewrite: false,
    onProxyReq(proxyReq, req, res) {
      proxyReq.setHeader('x-forwarded-for', '127.0.0.1')
    }
  }).apply(this, arguments)
});


// 处理mode:'history'下的地址问题
var history = require('connect-history-api-fallback');

app.use(history({
  index: '',
  verbose: false,
}));

app.use(express.static('./dist'))





if(isDev) {

  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  var compiler = webpack(webpackConfig);

  var devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: true,
    quiet: true,  //向控制台显示任何内容 
    stats: {
      colors: true,
      chunks: false
    }
  });
  var hotMiddleware = webpackHotMiddleware(compiler);
  app.use(devMiddleware);
  app.use(hotMiddleware);
}

var port = 9106
app.listen(port, function(req, res) {
  console.log(`listening on port ${port}!`);
});



function login (opts, next) {
    // crypto password
    var md5pwd = util.md5Encrypt(opts.pwd)
    var db = mongo(['users'])

    async.waterfall([
        function(done){
            db.users.findOne({
                uid: opts.uid,
                pwd: md5pwd
            }, function(err, user) {
                if (err) {
                    return next('无法连接数据库。')
                }
                if (!user) {
                    return next('用户名和密码不匹配。')
                }
                if (!user.enabled) {
                    return next('用户已被锁定，无法登录。')
                }
                done(null, user)
            })
        },
        function(user, done){
            db.users.update({uid: opts.uid }, {$set: {modified: new Date() } }, function(err){
                if (err) {
                  console.error("failed to update modified: %s", err.message)
                }
                next(null, user)
            })
        }
    ], next)
}


var _mongodb;
function mongo (connectionString, collections) {
    if (!Array.isArray(collections) || collections.length === 0) {
        collections = connectionString
        connectionString = config.mongodb.connections['default']
    }
    var mdb
    if (!_mongodb || !(mdb = _mongodb[connectionString])) {
        _mongodb = _mongodb || {}
        mdb = mongojs(connectionString)
        mdb.on('error', function(err){
            console.error('MongoDb error:', err.message)
            mdb.close()
        })
        _mongodb[connectionString] = mdb
    }
    var db = {}
    for (var i = 0; i < collections.length; i++) {
        var collection = collections[i]
        db[collection] = mdb.collection(collection)
    }
    return db
}


