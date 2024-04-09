import { IncomingMessage, ServerResponse } from "node:http";
import { getHtml } from "../views/home";

export function renderHome(request: IncomingMessage, response: ServerResponse) {
  const html = getHtml();

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
