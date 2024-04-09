import { getCategory } from "../models/Category";
import { getProducts } from "../models/Product";
import { getSeller } from "../models/Seller";

export function getContent(): string {
  let html = "";

  const products = getProducts();

  for (let product of products) {
    const category = getCategory(product.categoryId);
    const seller = getSeller(product.sellerId);

    html += `
      <div style="border:1px solid grey; margin-bottom:25px">
        <h3 style="margin-bottom:0">${product.name} (category: ${category?.name}) from ${seller?.name}</h3>
        <p style="margin-top:0">Price: ${product.pricePLN} PLN</p>
      </div>
    `;
  }

  return html;
}
