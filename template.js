'use strict';

// Basic template description.
exports.description = 'Create an instance of little-printer-example';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template tries to guess file and directory paths, but ' +
  'you will most likely need to edit the generated content file before ' +
  'running express/grunt. _If you run express/grunt after generating and ' +
  'they exit with errors, edit the files!_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'package.json';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. Try _node express/server.js_ and pointing toward _localhost:5000_';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    init.prompt('name'),
    {
      name: 'title',
      message: 'Formatted title for LP Store',
      default: 'My Project'
    },
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    {
      name: 'delivered_on',
      message: 'When is the content delivered?',
      default: 'every day'
    }    
  ], function(err, props) {

    props.keywords = ['berg', 'little printer'];

    props.dependencies = {
      "ejs": "0.8.3",
      "express": "3.1.0",
      "littleprinter": "1.0.2"
    };

    props.devDependencies = {
      "grunt" : "0.4.0",
      "grunt-contrib-jshint" : "0.1.0"
    };

    props.engines = {
      "node":"0.8.x",
      "npm":"1.1.x"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
