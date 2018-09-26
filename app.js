const fs = require ('fs');

exports.fs.writeFile('message.txt', 'hello-world.txt', 'utf8', (err) => {
  if (err) throw err;

  console.log('success')
});

exports.fs.appendFile('message.txt', 'Hello to this great world', 'utf8', (err) => {
  if (err) throw err;

  console.log('success again!')
});
