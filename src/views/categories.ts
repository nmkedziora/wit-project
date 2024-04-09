import { IncomingMessage, ServerResponse } from "node:http";
import {
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeading,
} from "./partials";
import { getContent } from "../controllers/categoriesController";

export function renderCategories(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const htmlStart = getHtmlStart();
  const htmlEnd = getHtmlEnd();
  const heading = getPageHeading("Categories");
  const homeLink = getHomeLink();
  const content = getContent();

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(htmlStart);
  response.write(heading);
  response.write(homeLink);
  response.write(content);
  response.write(htmlEnd);
  response.end();
}
