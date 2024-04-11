import {
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeader,
  getPageHeading,
} from "./partials";
import { Category } from "../models/Category";
import { User } from "../models/User";

export function getHtml(
  user: User | undefined,
  categories: Category[],
): string {
  return `
    ${getHtmlStart()}
    ${getPageHeader(user)}
    ${getPageHeading("Categories")}
    ${getHomeLink()}
    ${getContent(categories)}
    ${getHtmlEnd()}
  `;
}

function getContent(categories: Category[]): string {
  let content = "";

  for (let category of categories) {
    content += `
      <div style="border:1px solid grey; margin-bottom:25px">
        <h3 style="margin-bottom:0">${category.name}</h3>
      </div>
    `;
  }

  return content;
}
