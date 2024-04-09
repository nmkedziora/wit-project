import { IncomingMessage, ServerResponse } from "node:http";
import {
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeading,
} from "./partials";
import { getContent } from "../controllers/productsController";

export function renderProducts(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const htmlStart = getHtmlStart();
  const htmlEnd = getHtmlEnd();
  const heading = getPageHeading("Products");
  const homeLink = getHomeLink();
  const content = getContent();

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(htmlStart);
  response.write(homeLink);
  response.write(heading);
  response.write(content);
  response.write(htmlEnd);
  response.end();
}
