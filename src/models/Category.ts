import { query } from "../services/db";

export type CategoryId = number;

interface RawCategory {
  id: number;
  cname: string;
}

export class Category {
  id: CategoryId;
  name: string;

  constructor(id: CategoryId, name: string) {
    this.id = id;
    this.name = name;
  }
}

export async function getCategories(): Promise<Category[]> {
  return query(`SELECT * FROM categories;`, (results: RawCategory[]) =>
    results.map((result) => new Category(result.id, result.cname)),
  );
}

export async function getCategory(id: CategoryId): Promise<Category | null> {
  return query(
    `SELECT * FROM categories WHERE id=${id}`,
    (results: RawCategory[]) =>
      results.length ? new Category(results[0].id, results[0].cname) : null,
  );
}
