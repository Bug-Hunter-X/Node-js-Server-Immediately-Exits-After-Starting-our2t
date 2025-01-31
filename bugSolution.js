const http = require('http');

const server = http.createServer((req, res) => {
  // ... request handling logic ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
  //process.exit(); //This line has been removed or commented out
});
//To gracefully shutdown the server, you might implement the following:

//server.on('close', () => {
//  console.log('Server closed');
//});

//process.on('SIGINT', () => {
//  server.close(() => {
//    console.log('Server closed gracefully');
//    process.exit();
//  });
//});
