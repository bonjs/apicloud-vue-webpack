<template lang="pug">
    el-form(ref="form" class="login" v-loading="loading" :model="form" label-width="80px")
      el-form-item(label="用户名" prop="username")
        el-input(v-model="form.username")
      el-form-item(label="密码" prop="password")
        el-input(type="password" v-model="form.password")
      el-form-item
        el-button(type="primary" @click="login") 登录
        el-button(@click="reset") 重置
</template>
<script>

import Vue from 'vue';
import {Form, FormItem, Button, Loading, Input, Message} from 'element-ui';


import axios from 'axios';
import util from '../../util';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Loading);
Vue.use(Input);
Vue.component(Message);


Vue.prototype.$message = Message;

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      loading: false
    };
  },
  methods: {
    login: function() {
      var me = this;
      this.loading = true;
      
      axios.post('/login', {
        uid: this.form.username,
        pwd: util.encrypt(this.form.password, 'efvj40$#9gr#idfijp43k2fdna;kwe')
      }).then(function(res) {

        me.loading = false;
        if(res.data) {
          window.location.href = '/'
/* 
          me.$router.push({
            path: '/'
          }) */
        } else {
          me.$message({
            type: 'error',
            message: '登录失败'
          })
        }
      })
    },
    reset: function() {
      this.$refs.form.resetFields();
    },
    //components: {ElForm:Form, ElFormItem: FormItem, Button, ElLoading: Loading }
  }
};
</script>
<style>
html,
body {
}
.login {
  width: 400px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
}
</style>

