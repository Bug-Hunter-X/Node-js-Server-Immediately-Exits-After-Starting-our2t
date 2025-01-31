# Node.js Server Immediately Exits After Starting

This repository demonstrates a common error in Node.js where the server process exits prematurely, preventing any incoming requests from being handled.

The issue is caused by calling `process.exit()` after starting the server using `server.listen()`.  `process.exit()` immediately terminates the Node.js process, including the server.

## Solution

To fix this, remove or relocate the `process.exit()` call.  The server should run until explicitly stopped using a mechanism like `server.close()` or a process manager like `pm2` or `forever`.