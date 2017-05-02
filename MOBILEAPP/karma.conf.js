
module.exports = function(config) {
    config.set({

        basePath: '.',

        entry: 'test/main.js',
        frameworks: ['jasmine'],

        files: [
            { pattern: 'test/main.js', watched: false }
        ],

        /* proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/app/': '/base/app/'
        },*/

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-sourcemap-loader'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (Files used by Istanbul)
        preprocessors: {
            'test/main.js': ['webpack']
        },
        webpack: require('./webpack.config')({env: 'test'}),
        coverageReporter: {
            reporters:[
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },

        singleRun: true
    })
};
