const http = require('http');

const server = http.createServer((req, res) => {
  // ... request handling logic ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// This will cause the server to exit immediately without allowing requests to be processed.
process.exit();