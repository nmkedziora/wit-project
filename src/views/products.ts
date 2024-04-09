import {
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeading,
} from "./partials";
import { Product } from "../models/Product";

export function getHtml(products: Product[]): string {
  return `
  ${getHtmlStart()}
  ${getPageHeading("Products")}
  ${getHomeLink()}
  ${getContent(products)}
  ${getHtmlEnd()}
`;
}

function getContent(products: Product[]): string {
  let content = "";

  for (let product of products) {
    content += `
      <div style="border:1px solid grey; margin-bottom:25px">
        <h3 style="margin-bottom:0">${product.name}</h3>
        <p style="margin-top:0">Price: ${product.pricePLN} PLN</p>
        <a href="/products?id=${product.id}">check product details</a>
      </div>
    `;
  }

  return content;
}
