import { query } from "../services/db";

export type SellerId = number;

interface RawSeller {
  id: number;
  sname: string;
}

export class Seller {
  id: SellerId;
  name: string;

  constructor(id: SellerId, name: string) {
    this.id = id;
    this.name = name;
  }
}

export async function getSellers(): Promise<Seller[]> {
  return query(`SELECT * FROM sellers;`, (results: RawSeller[]) =>
    results.map((result) => new Seller(result.id, result.sname)),
  );
}

export async function getSeller(id: SellerId): Promise<Seller | null> {
  return query(
    `SELECT * FROM sellers WHERE id=${id}`,
    (results: RawSeller[]) =>
      results.length ? new Seller(results[0].id, results[0].sname) : null,
  );
}
