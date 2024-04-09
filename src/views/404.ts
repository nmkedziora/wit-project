import { IncomingMessage, ServerResponse } from "http";

export function render404(request: IncomingMessage, response: ServerResponse) {
  const body = `
  <html>
    <body>
      <h1>404 Page not found</h1>
      <span>💩</span>
      <p>
        This page is not available. 
        <a href="/">But home is.</a>
      </p>
    </body>
  </html>
  `;

  response.writeHead(200, { "Content-Type": "text/html" }).end(body);
}
