module.exports = function (grunt) {

    // Add the grunt-mocha-test tasks.
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        // Configure a mochaTest task
        mochaTest: {
            sonar: {
                options: {
                    reporter: 'mocha-sonarqube-reporter',
                    quiet: true,
                    reporterOptions: {
                        output: 'unit-tests.xml', // default to ./xunit.xml
                        useFullFilePath: 'true' // default to 'false'. Uses full test file paths in the report.
                    }
                },
                src: [
                    'app/**/*.spec.js'
                ]
            }
        }
    });

    grunt.registerTask('default', 'mochaTest');

};
