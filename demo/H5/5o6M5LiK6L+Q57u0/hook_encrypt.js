Java.perform(function () {
    var Encrypt = Java.use('com.halfsuger.zyencryptccssoft.zyEncryptCcssoft');
    Encrypt.jsmethod_encryptCcssoft_sync.implementation = function (a) {
        console.log(JSON.stringify(a), 'Encrypt')
        return this.jsmethod_encryptCcssoft_sync(a);
    }

});