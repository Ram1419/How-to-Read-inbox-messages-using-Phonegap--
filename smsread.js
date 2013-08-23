
cordova.define("cordova/plugin/SMSReader", function (require, exports, module) {
    var exec = require('cordova/exec');
    var SmsRecPlugin = function () { };

    /**
    * inbox reader
    */
    SmsRecPlugin.prototype.getInbox = function (params, successCallback, failureCallback) {
        alert("hi");
        return exec(successCallback, failureCallback, 'SMSReader', 'inbox', [params]);
    }

    /**
    * sent reader
    */
    SmsRecPlugin.prototype.getSent = function (params, successCallback, failureCallback) {
        
        return exec(successCallback, failureCallback, 'SMSReader', 'sent', [params]);
    }

    var smsrecplugin = new SmsRecPlugin();
    module.exports = smsrecplugin;
});
