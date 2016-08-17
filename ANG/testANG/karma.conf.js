module.exports = function(config) {
    config.set({
        frameworks: ['mocha','chai'],

        files: ["http://code.jquery.com/jquery-1.12.4.min.js",
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js",
            "myDirective.js",
            "test/test.js",







        ],
        browsers: ['Chrome']
    });
};