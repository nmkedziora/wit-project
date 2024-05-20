import { IncomingMessage, ServerResponse } from "node:http";
import { renderHome } from "./controllers/homeController";
import { renderCategories } from "./controllers/categoriesController";
import { login, renderLogin } from "./controllers/loginController";
import { renderProductDetails } from "./controllers/productController";
import { renderProducts } from "./controllers/productsController";
import { renderSellers } from "./controllers/sellersController";
import { renderSignup, signup } from "./controllers/signupController";
import { render404 } from "./controllers/404Controller";
import { RequestContext } from "./services/context";
import { logout } from "./controllers/logoutController";

export function routeRequest(
  context: RequestContext,
  url: URL,
  request: IncomingMessage,
  response: ServerResponse,
) {
  if (request.method === "GET") {
    routeGetRequest(context, url, request, response);
  }

  if (request.method === "POST") {
    routePostRequest(url, request, response);
  }
}

function routeGetRequest(
  context: RequestContext,
  url: URL,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const pathname = url.pathname;
  const search = url.search;

  switch (true) {
    case pathname === "/":
      renderHome(context, request, response);
      break;
    case pathname === "/categories":
      renderCategories(context, request, response);
      break;
    case pathname === "/login":
      renderLogin(context, request, response);
      break;
    case pathname === "/logout":
      logout(context, request, response);
      break;
    case pathname === "/products" && !!search:
      renderProductDetails(context, request, response, url);
      break;
    case pathname === "/products":
      renderProducts(context, request, response);
      break;
    case pathname === "/sellers":
      renderSellers(context, request, response);
      break;
    case pathname === "/signup":
      renderSignup(context, request, response);
      break;
    default:
      render404(request, response);
  }
}

function routePostRequest(
  url: URL,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const pathname = url.pathname;

  switch (true) {
    case pathname === "/login":
      login(request, response);
      break;
    case pathname === "/signup":
      signup(request, response);
      break;
    default:
      render404(request, response);
  }
}
