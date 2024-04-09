import { IncomingMessage, ServerResponse } from "node:http";
import {
  getPageHeading,
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
} from "./partials";
import { getContent } from "../controllers/sellersController";

export function renderSellers(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const htmlStart = getHtmlStart();
  const htmlEnd = getHtmlEnd();
  const heading = getPageHeading("Sellers");
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
