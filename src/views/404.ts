import { getHtmlEnd, getHtmlStart, getPageHeading } from "./partials";

export function getHtml(): string {
  return `
    ${getHtmlStart()}
    ${getPageHeading("404 Page not found")}
    ${getContent()}
    ${getHtmlEnd()}
  `;
}

function getContent(): string {
  return `
    <span>💩</span>
    <p>
      This page is not available. 
      <a href="/">But home is.</a>
    </p>
  `;
}
