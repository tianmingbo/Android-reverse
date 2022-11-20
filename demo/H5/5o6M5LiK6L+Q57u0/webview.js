//com.zngst.app
Java.perform(function () {
    var WebView = Java.use('android.webkit.WebView');
    WebView.$init.overload('android.content.Context').implementation = function (a) {
        console.log("WebView.$init is called!1");
        var retval = this.$init(a);
        this.setWebContentsDebuggingEnabled(true);
        return retval;
    }
    WebView.$init.overload('android.content.Context', 'android.util.AttributeSet').implementation = function (a, b) {
        console.log("WebView.$init is called!2");
        var retval = this.$init(a, b);
        this.setWebContentsDebuggingEnabled(true);
        return retval;
    }
    WebView.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int').implementation = function (a, b, c) {
        console.log("WebView.$init is called!3");
        var retval = this.$init(a, b, c);
        this.setWebContentsDebuggingEnabled(true);
        return retval;
    }

    WebView.setWebContentsDebuggingEnabled.implementation = function () {
        this.setWebContentsDebuggingEnabled(true);
        console.log("setWebContentsDebuggingEnabled is called!");
    }

});





