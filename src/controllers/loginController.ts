import { IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:querystring";
import { getHtml } from "../views/login";
import { RequestContext } from "../context";

export function renderLogin(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const html = getHtml(user);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}

export function login(request: IncomingMessage, response: ServerResponse) {
  console.log("login");
}
