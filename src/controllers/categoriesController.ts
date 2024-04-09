import { IncomingMessage, ServerResponse } from "node:http";
import { getCategories } from "../models/Category";
import { getHtml } from "../views/categories";

export function renderCategories(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const categories = getCategories();
  const html = getHtml(categories);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
