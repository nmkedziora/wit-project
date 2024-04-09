import { IncomingMessage, ServerResponse } from "node:http";
import { getHtml } from "../views/404";

export function render404(request: IncomingMessage, response: ServerResponse) {
  const html = getHtml();

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
