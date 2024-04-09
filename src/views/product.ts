import {
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeading,
} from "./partials";
import { Product } from "../models/Product";

export function getHtml(product: Product): string {
  return `
  ${getHtmlStart()}
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
      <p style="margin-top:0">Price: ${product.pricePLN} PLN</p>
      <p>${product.description}</p>
    </div>
    <a href="/products">⬅ get back to products list</a>
  `;
}
