import {
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeader,
  getPageHeading,
} from "./partials";
import { Product } from "../models/Product";
import { User } from "../models/User";

export function getHtml(user: User | undefined, product: Product): string {
  return `
  ${getHtmlStart()}
  ${getPageHeader(user)}
  ${getPageHeading("Product details")}
  ${getHomeLink()}
  ${getContent(product)}
  ${getHtmlEnd()}
`;
}

function getContent(product: Product): string {
  return `
    <div style="border:1px solid grey; margin-bottom:25px">
      <h3 style="margin-bottom:0">${product.name}</h3>
      <p style="margin-top:0">Price: ${product.price} ${product.currency}</p>
      <p>${product.info}</p>
    </div>
    <a href="/products">⬅ get back to products list</a>
  `;
}
