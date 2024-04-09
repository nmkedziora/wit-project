export function getHtmlStart(): string {
  return `<html><body>`;
}

export function getHtmlEnd(): string {
  return ` </body></html>`;
}

export function getPageHeading(heading: string): string {
  return `<h1>${heading}</h1>`;
}

export function getHomeLink(): string {
  return `<a href="/">⬅ get back to home page</a>`;
}
