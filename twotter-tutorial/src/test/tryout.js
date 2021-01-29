var Test = function(a) {
    return {
        "test": "test",
        "abc": "value abc"
    }
}

var x = Test(12);

WScript.Echo(x.abc);
