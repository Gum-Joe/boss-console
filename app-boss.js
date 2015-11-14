// Main startup app
var com = require('commander');
var c = require('child_process');
com
  .usage('<dir> [options]')
  .version('1.0.0')
  .option('-va, --vagrant', 'Runs Web-OS in a Vagrant Box')
  .action(function (dir, option) {
    di = dir;
  })
  .parse(process.argv);

if(typeof di === 'undefined'){
  // Assume it is in .
  // Load start
  var ser = c.spawn('node', ['--version']);
  ser.stdout.on('data', function (data) {
    console.log(data.toString('utf8'));
  });
  ser.on('close', function (code) {
    process.exit(code);
  })
  // ser.on('exit', function (data) {
  //   process.exit(0);
  // });
}
