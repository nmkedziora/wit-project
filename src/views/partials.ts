import { User } from "../models/User";

export function getHtmlStart(): string {
  return `<html><body style="font-size: 2rem">`;
}

export function getHtmlEnd(): string {
  return ` </body></html>`;
}

export function getPageHeader(user?: User): string {
  if (user) {
    return `
    <div style="background-color: lightgrey">
      <p style="margin: 0">Hello ${user.username}!</p>
      <a href="/logout">Log out</a>
    </div>
  `;
  }

  return `
    <div style="background-color: lightgrey">
      <p style="margin: 0">Hello Stranger!</p>
      <a href="/login">Log in</a>
    </div>
  `;
}

export function getPageHeading(heading: string): string {
  return `<h1>${heading}</h1>`;
}

export function getHomeLink(): string {
  return `<a href="/">⬅ get back to home page</a>`;
}

export function getError(): string {
  return `
    <div style="color: red">
      <p style="margin: 0">
        Oops! It seems like there's a mismatch between your username and/or password.</br>
        Please double-check your credentials and try again.
      </p>
    </div>
  `;
}
