const _ = require("underscore")

const a = [1,243,4]
_.each(a,function (element) {
    console.log("this is a number " + a);
})