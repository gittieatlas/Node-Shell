const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

//output a prompt
process.stdout.write('prompt > ');

//The stdin data event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data
    .toString()
    .trim()
    .split(' ')[0];
  const parameters = data
    .toString()
    .trim()
    .split(' ')
    .slice(1);
  console.log('cmd', cmd, 'parameters', parameters, 'data', data);
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    cat(parameters);
  } else if (cmd === 'curl') {
    curl(parameters[0]);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
