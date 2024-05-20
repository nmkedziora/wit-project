import { IncomingMessage, ServerResponse } from "node:http";
import { getProducts } from "../models/Product";
import { getHtml } from "../views/products";
import { RequestContext } from "../services/context";

export async function renderProducts(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const products = await getProducts();
  const html = getHtml(user, products);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
