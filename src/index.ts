import { createServer } from "node:http";
import { handleRequest } from "./services/app";

// Create a server
const server = createServer(handleRequest);

// Start the server
const hostname = "0.0.0.0";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
