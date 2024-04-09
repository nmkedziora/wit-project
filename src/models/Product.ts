import { CategoryId } from "./Category";
import { SellerId } from "./Seller";

export type ProductId = number;

export class Product {
  id: ProductId;
  name: string;
  pricePLN: number;
  categoryId: CategoryId;
  sellerId: SellerId;
  description: string;

  constructor(
    id: ProductId,
    name: string,
    pricePLN: number,
    categoryId: CategoryId,
    sellerId: SellerId,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.pricePLN = pricePLN;
    this.categoryId = categoryId;
    this.sellerId = sellerId;
    this.description = description;
  }
}

const drinks: Product[] = [
  new Product(
    32,
    "Green Tea",
    4,
    111,
    4004,
    "Refreshing tea with a hint of herbal goodness.",
  ),
  new Product(
    35,
    "Iced Tea",
    5,
    111,
    2002,
    "Cool off with our chilled and flavorful iced tea.",
  ),
  new Product(
    34,
    "Orange Juice",
    3,
    111,
    1001,
    "Start your day fresh with our tangy orange juice.",
  ),
  new Product(
    310,
    "Energy Drink",
    7,
    111,
    7007,
    "Get an instant boost with our energizing drink.",
  ),
  new Product(
    39,
    "Chocolate",
    2.25,
    111,
    6006,
    "Indulge in rich and creamy chocolate goodness.",
  ),
];

const pastries: Product[] = [
  new Product(
    17,
    "Palmier",
    1.75,
    222,
    3003,
    "Delightfully flaky palm-shaped pastry with a hint of sweetness.",
  ),
  new Product(
    14,
    "Eclair",
    2.75,
    222,
    1001,
    "Indulge in this classic French pastry filled with creamy goodness.",
  ),
  new Product(
    15,
    "Muffin",
    2.25,
    222,
    2002,
    "Start your day right with our freshly baked, moist muffins.",
  ),
  new Product(
    12,
    "Cinnamon Roll",
    3,
    222,
    6006,
    "Satisfy your cravings with our soft, gooey cinnamon rolls.",
  ),
  new Product(
    19,
    "Puff Pastry",
    2.25,
    222,
    6006,
    "Enjoy the light and airy layers of our flaky puff pastry.",
  ),
];

const sandwiches: Product[] = [
  new Product(
    21,
    "Club Sandwich",
    15,
    333,
    2002,
    "Classic sandwich loaded with layers of meats, cheese, and veggies.",
  ),
  new Product(
    25,
    "Pancake Sandwich",
    11,
    333,
    1001,
    "Unique twist on a sandwich with fluffy pancakes as the bread.",
  ),
  new Product(
    22,
    "BLT Sandwich",
    12,
    333,
    5005,
    "Enjoy the crispy bacon, fresh lettuce, and juicy tomatoes.",
  ),
  new Product(
    28,
    "PB&J Sandwich",
    16,
    333,
    6006,
    "A childhood favorite made with creamy peanut butter and jam.",
  ),
  new Product(
    29,
    "Roast Beef Sandwich",
    14,
    333,
    5005,
    "Savor the tender roast beef paired with savory toppings.",
  ),
];

export function getProducts(): Product[] {
  return [...drinks, ...pastries, ...sandwiches];
}
