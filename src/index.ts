import { createServer } from "node:http";
import { handleRequest } from "./app";

// Create a server
const server = createServer(handleRequest);

// Start the server
const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
