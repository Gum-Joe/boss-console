// Main entry script
var com = require('commander');
com
  .usage('<command> [options]')
  .version('1.0.0')
  .command('boss', 'Start the Web-OS server in the current directory')
  .command('start', 'Start the Web-OS server listed in ~/.web/location.txt')
  .parse(process.argv);
