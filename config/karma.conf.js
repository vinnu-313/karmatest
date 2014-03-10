module.exports = function (config) {
    config.set({
        basePath: '../',

        files: [
            'app/lib/*.js',
            'app/lib/angular/angular.js',
            'app/lib/angular/angular-*.js',
            'test/lib/angular/angular-mocks.js',
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],

        exclude: [
            'app/lib/angular/angular-loader.js',
            'app/lib/angular/*.min.js',
            'app/lib/angular/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],

        browsers: ['Chrome'],
        reporters: ['dots', 'junit'],
        junitReporter: {
            outputFile: 'unit-test-results.xml',
            suite: 'unit'
        }

    })
}
