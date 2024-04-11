import { IncomingMessage, ServerResponse } from "node:http";
import { Product, ProductId, getProduct } from "../models/Product";
import { getHtml } from "../views/product";
import { render404 } from "./404Controller";
import { RequestContext } from "../context";

export function renderProductDetails(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
  url: URL,
) {
  const id = url.searchParams.get("id");

  if (!id) {
    render404(request, response);
    return;
  }

  const productId = toProductId(id);
  const product: Product | null = getProduct(productId);

  if (!product) {
    render404(request, response);
    return;
  }

  const user = context.getUser();
  const html = getHtml(user, product);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}

function toProductId(id: string): ProductId {
  return parseInt(id);
}
