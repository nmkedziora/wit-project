import mysql from "mysql";

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'witapp',
  password: 'witapp',
  database: 'wit'
});



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
  // connection.query(`
  //   SELECT * FROM categories;
  // `, (err, result, fields) => {

  // })
}

export function getCategoriesFromDb() {
  console.log("Categories from DB")
  connection.query(`
    SELECT * FROM categories;
  `, (err, results, fields) => {
    console.log("SELECT * FROM categories", results);
    const categories: Category[] = results.map((result: any) => new Category(result.id, result.cname))
    console.log("SELECT * FROM categories", categories);


    return categories;
  })
}


export async function getCategoriesFromDbAsync() {
  console.log("ASYNC Categories from DB")

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM categories;`,
      (error, results, fields) => {
        const categories: Category[] = results.map((result: any) => new Category(result.id, result.cname))
        
        console.log("ASYNC SELECT * FROM categories", categories);

        resolve(categories)
      }
    )
  })
}



export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((category) => category.id === id);
}
