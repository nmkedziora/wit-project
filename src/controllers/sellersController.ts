import { IncomingMessage, ServerResponse } from "node:http";
import { getSellers } from "../models/Seller";
import { getHtml } from "../views/sellers";
import { RequestContext } from "../context";

export function renderSellers(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const sellers = getSellers();
  const html = getHtml(user, sellers);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
