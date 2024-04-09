import {
  getPageHeading,
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
} from "./partials";
import { Seller } from "../models/Seller";

export function getHtml(sellers: Seller[]): string {
  return `
    ${getHtmlStart()}
    ${getPageHeading("Sellers")}
    ${getHomeLink()}
    ${getContent(sellers)}
    ${getHtmlEnd()}
  `;
}

export function getContent(sellers: Seller[]): string {
  let content = "";

  for (let seller of sellers) {
    content += `
      <div style="border:1px solid grey; margin-bottom:25px">
        <h3 style="margin-bottom:0">${seller.name}</h3>
      </div>
    `;
  }

  return content;
}
