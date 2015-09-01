// Karma configuration
// Generated on Mon Aug 31 2015 14:03:10 GMT+0800 (CST)

module.exports = function (config) {
    config.set({

            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: './',

            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine', 'requirejs'],

            // list of files / patterns to load in the browser
            files: [
                {pattern: 'src/**/*.js', included: false},
                {pattern: 'test/**/*Spec.js', included: false},
                'test/test-main.js'
            ],

            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: {
                'src/**/*.js': ['babel'],
                'test/**/!(test-main).js': ['babel']
            },
            babelPreprocessor: {
                options: {
                    sourceMap: 'inline',
                    modules: 'amd'
                }
            },

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,

            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['Chrome'],

            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: false
        }
    )
};
