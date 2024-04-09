import { IncomingMessage, ServerResponse } from "node:http";
import { getProducts } from "../models/Product";
import { getHtml } from "../views/products";

export function renderProducts(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const products = getProducts();
  const html = getHtml(products);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
