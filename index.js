const http = require('http');
const port = 3000;
const fs = require ('fs');


const requestHandler = (request, response) => {
  console.log(request.url)
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;

    console.log('success')
  });
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
