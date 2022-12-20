const childProcess = require('child_process');
const path = require('path');


const cmd = childProcess.spawn('node', [path.join(__dirname, 'getHomeDir')]);

// Show the result
cmd.stdout.on('data', (data) => {
    console.log(data.toString());
});

// SHow the error
cmd.stderr.on('data', (data) => {
    console.log(data.toString());
});

// Log when the process is closed
cmd.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
});