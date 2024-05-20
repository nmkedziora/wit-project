import { IncomingMessage, ServerResponse } from "node:http";
import { getCategories } from "../models/Category";
import { getHtml } from "../views/categories";
import { RequestContext } from "../services/context";

export async function renderCategories(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const categories = await getCategories();
  const html = getHtml(user, categories);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}
