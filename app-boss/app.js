// Main startup app
var com = require('commander');
com
  .usage('<dir> [options]')
  .version('1.0.0')
  .option('-va, --vagrant', 'Runs Web-OS in a Vagrant Box')
  .parse(process.argv);
