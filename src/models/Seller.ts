import { CategoryId } from "./Category";
import { ProductId } from "./Product";

export type SellerId = number;

class Seller {
  id: SellerId;
  name: string;

  constructor(id: SellerId, name: string) {
    this.id = id;
    this.name = name;
  }
}

const sellers: Seller[] = [
  new Seller(4004, "Tea Time"),
  new Seller(2002, "Sandwich Haven"),
  new Seller(1001, "Bake Masters"),
  new Seller(7007, "Boost Bar"),
  new Seller(6006, "Sweet Treats"),
  new Seller(5005, "Bacon Delights"),
  new Seller(3003, "Yummy Bakery"),
];

export function getSellers() {
  return sellers;
}

export function getSeller(id: SellerId): Seller | undefined {
  return sellers.find((seller) => seller.id === id);
}
