import {
  getPageHeading,
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeader,
} from "./partials";
import { Seller } from "../models/Seller";
import { User } from "../models/User";

export function getHtml(user: User | undefined, sellers: Seller[]): string {
  return `
    ${getHtmlStart()}
    ${getPageHeader(user)}
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
