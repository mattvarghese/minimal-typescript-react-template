var console = require('console');
var exec = require('child_process').exec;
var os = require('os');

function puts(error, stdout, stderr) { console.log(stdout) }

// Run command depending on the OS
if (os.type() === 'Linux') 
   exec("rm -rf dist node_modules", puts);
else {
    exec("Remove-Item -Path dist -Force -Recurse", puts);
    exec("Remove-Item -Path node_modules -Force -Recurse", puts);
}