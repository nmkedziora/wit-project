import { IncomingMessage, ServerResponse } from "node:http";
import { getHtml } from "../views/home";
import { RequestContext } from "../context";

export function renderHome(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const html = getHtml(user);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
