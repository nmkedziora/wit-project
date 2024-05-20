import { query } from "../services/db";
import { CategoryId } from "./Category";
import { SellerId } from "./Seller";

export type ProductId = number;

interface RawProduct {
  id: number;
  category: number;
  seller: number;
  pname: string;
  price: number;
  currency: string;
  info: string;
}

export class Product {
  id: ProductId;
  category: CategoryId;
  seller: SellerId;
  name: string;
  price: number;
  currency: string;
  info: string;

  constructor({
    id,
    category,
    seller,
    name,
    price,
    currency,
    info,
  }: {
    id: ProductId;
    category: CategoryId;
    seller: SellerId;
    name: string;
    price: number;
    currency: string;
    info: string;
  }) {
    this.id = id;
    this.category = category;
    this.seller = seller;
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.info = info;
  }
}

export async function getProducts(): Promise<Product[]> {
  return query(`SELECT * FROM products;`, (results: RawProduct[]) =>
    results.map((result) => new Product({ ...result, name: result.pname })),
  );
}

export async function getProduct(id: ProductId): Promise<Product | null> {
  return query(
    `SELECT * FROM products WHERE id=${id}`,
    (results: RawProduct[]) =>
      results.length
        ? new Product({ ...results[0], name: results[0].pname })
        : null,
  );
}
