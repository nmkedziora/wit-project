import { getCategories } from "../models/Category";

export function getContent(): string {
  let html = "";

  const categories = getCategories();

  for (let category of categories) {
    html += `
      <div style="border:1px solid grey; margin-bottom:25px">
        <h3 style="margin-bottom:0">${category.name}</h3>
      </div>
    `;
  }

  return html;
}
