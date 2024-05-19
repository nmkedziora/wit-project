import { IncomingMessage, ServerResponse } from "node:http";
import { Category, getCategories, getCategoriesFromDb, getCategoriesFromDbAsync } from "../models/Category";
import { getHtml } from "../views/categories";
import { RequestContext } from "../context";

export function renderCategories(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const categories = getCategories();
  const categories1 = getCategoriesFromDb();
  console.log("categories1", categories1)
  const html = getHtml(user, categories);




  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}

export async function renderCategoriesAsync(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const categories2 = await getCategoriesFromDbAsync() as unknown as Category[];
  console.log("categories2", categories2)
  const html = getHtml(user, categories2);




  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}


