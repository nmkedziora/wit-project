import mysql, { queryCallback } from "mysql";
import { CONFIG } from "../config";

/*
I'm using createPool() instead of createConnection(), to avid bottleneck. 
Every method invoked on a connection is queued and executed in sequence,
so one request can block others.

With createPool() connections can be reused.
In connection pooling, after a connection is created,
it is placed in the pool and it is used again so that
a new connection does not have to be established.

If all the connections are being used, a new connection is made
and is added to the pool.
Connection pooling also cuts down on the amount of time
a user must wait to establish a connection to the database.
*/

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: CONFIG.db.host,
  user: CONFIG.db.user,
  password: CONFIG.db.password,
  database: CONFIG.db.database,
});

export async function query<T>(
  sql: string,
  callback: (results: any) => T,
): Promise<T> {
  return new Promise((resolve, reject) => {
    console.log("Querying DB with", `'${sql}'`);

    pool.query(sql, function (error, results, fields) {
      // A very naive and optimistic approach without validation and error handling
      if (error) {
        reject(error);
      }

      const data = callback(results);

      resolve(data);
    } as queryCallback);
  });
}
