const exec = require('child_process').exec;
var child = exec('touch /tmp/hello');

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/tmp']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});



const fs = require('fs');

fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});

fs.unlink('/tmp/world', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/world');
});
