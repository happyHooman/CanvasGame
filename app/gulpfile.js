'use strict';

const args = require('./helpers/args.js');
const includeAll = require('include-all');
const path = require('path');
const projectConfig = require('./helpers/project_config.js');

module.exports = function (gulp, projectRootPath) {

    let configuration = null;

    init();

    function init() {
        loadConfiguration();
        loadTasksDirectory('tasks-config');
        loadTasksDirectory('tasks-register');
    }

    function loadConfiguration() {

        configuration = {
            environment: args.getEnvironment(),
            projectConfig: projectConfig.getConfig(projectRootPath),
            projectRootPath,
            projectReleasePath: path.join(projectRootPath, 'release'),
            projectTmpPath: path.join(projectRootPath, 'tmp'),
            sdkNodeModules: path.join(projectRootPath, '/node_modules/bookingbug-angular/node_modules')
        };
    }

    function loadTasksDirectory(directory) {
        const tasks = includeAll({
            dirname: path.resolve(__dirname, directory),
            filter: /(.+)\.(js)$/
        }) || {};

        loadTasks(tasks);
    }

    function loadTasks(tasks) {
        for (const taskName in tasks) {
            if (typeof tasks[taskName] === 'function') tasks[taskName](gulp, configuration);
            else loadTasks(tasks[taskName]);
        }
    }

    return module.exports = gulp;
};
