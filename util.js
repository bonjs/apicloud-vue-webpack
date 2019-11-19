'use strict'

var crypto = require("crypto")

module.exports = {
    decrypt,
    encrypt,
    md5Encrypt,
}


/**
 * decrypt password with secret
 * @param str the string to be decrypted.
 * @param secret secret secret string.
 * @return {*|Progress|Progress}
 */
function decrypt(str, secret) {
    secret = secret.replace(/\W/g, "")
    try{
        var decipher = crypto.createDecipher("aes-256-ecb", secret);
        var dec = decipher.update(str, "hex", "utf8");
        dec += decipher.final("utf8");
        return dec;
    }
    catch(err){
        return ""
    }
}

/**
 * encrypt string with secret.
 * @param str the string to be encrypted.
 * @param secret secret string.
 * @return {*|Progress|Progress}
 */
function encrypt(str, secret) {
    secret = secret.replace(/\W/g, "")
    try{
        var cipher = crypto.createCipher("aes-256-ecb", secret);
        var enc = cipher.update(str, "utf8", "hex");
        enc += cipher.final("hex");
        return enc;
    }
    catch(err){
        return ""
    }
}

function md5Encrypt (text) {
    var md5 = crypto.createHash('md5')
    md5.update(text)
    return md5.digest('hex')
}