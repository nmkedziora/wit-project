import { IncomingMessage, ServerResponse, createServer } from "node:http";
import { renderCategories } from "./controllers/categoriesController";
import { renderHome } from "./controllers/homeController";
import { renderProducts } from "./controllers/productsController";
import { renderSellers } from "./controllers/sellersController";
import { render404 } from "./controllers/404Controller";

// Create a server
const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    // Parse the request URL using new URL constructor
    const input = request.url as string;
    const base = `http://${request.headers.host}`;

    const myURL: URL = new URL(input, base);
    console.log(myURL);

    // Route requests based on pathname and send respective response
    routeRequest(myURL.pathname, request, response);
  },
);

// Start the server
const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function routeRequest(
  pathname: string,
  request: IncomingMessage,
  response: ServerResponse,
) {
  switch (pathname) {
    case "/":
      renderHome(request, response);
      break;
    case "/categories":
      renderCategories(request, response);
      break;
    case "/products":
      renderProducts(request, response);
      break;
    case "/sellers":
      renderSellers(request, response);
      break;
    default:
      render404(request, response);
  }
}
