export type UserId = number;

export class User {
  username: string;
  password: string;
  meal: string;
  id: UserId;

  constructor(username: string, password: string, meal: string) {
    this.username = username;
    this.password = password;
    this.meal = meal;
    this.id = generateId();
  }
}

const users: User[] = [];

export interface RawUser {
  username: User["username"];
  password: User["password"];
  meal: User["meal"];
}

export function createUser({ username, password, meal }: RawUser): User {
  /*
  Validation and password encryption skipped intentionally. 
  In prod-grade code both of these would be a must.
  */
  const user = new User(username, password, meal);

  users.push(user);

  return user;
}

export function getUsers(): User[] {
  return users;
}

export function getUser(id: UserId): User | undefined {
  return users.find((user) => user.id === id);
}

/*
This is very naive implementation of ID generation.
In prod-grade code, a more robust method should be used, such as
UUID generation or relying on a database to generate unique IDs.
This approach increments a global counter each time an ID is generated.
*/
let id: UserId = 0;

function generateId() {
  return (id += 1);
}
