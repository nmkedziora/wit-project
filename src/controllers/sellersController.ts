import { getSellers } from "../models/Seller";

export function getContent(): string {
  let html = "";

  const sellers = getSellers();

  for (let seller of sellers) {
    html += `
      <div style="border:1px solid grey; margin-bottom:25px">
        <h3 style="margin-bottom:0">${seller.name}</h3>
      </div>
    `;
  }

  return html;
}
