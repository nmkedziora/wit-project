export type CategoryId = number;

export class Category {
  id: CategoryId;
  name: string;

  constructor(id: CategoryId, name: string) {
    this.id = id;
    this.name = name;
  }
}

const categories: Category[] = [
  new Category(111, "Beverage"),
  new Category(222, "Pastry"),
  new Category(333, "Sandwich"),
];

export function getCategories() {
  return categories;
}

export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((category) => category.id === id);
}
