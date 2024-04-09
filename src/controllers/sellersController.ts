import { IncomingMessage, ServerResponse } from "node:http";
import { getSellers } from "../models/Seller";
import { getHtml } from "../views/sellers";

export function renderSellers(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const sellers = getSellers();
  const html = getHtml(sellers);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
