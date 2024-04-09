import { getHtmlEnd, getHtmlStart, getPageHeading } from "./partials";

export function getHtml(): string {
  return `
    ${getHtmlStart()}
    ${getPageHeading("Marektplace homepage")}
    ${getContent()}
    ${getHtmlEnd()}
  `;
}

function getContent(): string {
  return `
    <ul>
      <li>
        <a href="/products">shop by product</a>
      </li>
      <li>
        <a href="/categories">shop by category</a>
      </li>
      <li>
        <a href="/sellers">shop by seller</a>
      </li>
    </ul>
  `;
}
