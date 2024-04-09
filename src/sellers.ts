import { IncomingMessage, ServerResponse } from "node:http";

export function renderSellers(
  request: IncomingMessage,
  response: ServerResponse,
) {
  const body = `
  <html>
    <body>
      <h1>Sellers</h1>
      <p>
        <a href="/">get back to home page</a>
      </p>      
    </body>
  </html>
  `;

  response.writeHead(200, { "Content-Type": "text/html" }).end(body);
}
