import { IncomingMessage, ServerResponse } from "node:http";
import { getCategories } from "../models/Category";
import { getHtml } from "../views/categories";
import { RequestContext } from "../context";

export function renderCategories(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const categories = getCategories();
  const html = getHtml(user, categories);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
