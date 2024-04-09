export function getHtmlStart() {
  return `<html><body>`;
}

export function getHtmlEnd() {
  return ` </body></html>`;
}

export function getPageHeading(heading: string) {
  return `<h1>${heading}</h1>`;
}

export function getHomeLink() {
  return `<a href="/">⬅️ get back to home page</a>`;
}
