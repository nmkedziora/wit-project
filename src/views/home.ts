import { IncomingMessage, ServerResponse } from "node:http";

export function renderHome(request: IncomingMessage, response: ServerResponse) {
  const body = `
  <html>
    <body>
      <h1>This your marketplace!</h1>
      <ul>
        <li>
          <a href="/products">shop by product</a>
        </li>
        <li>
          <a href="/categories">shop by category</a>
        </li>
        <li>
          <a href="/sellers">shop by seller</a>
        </li>
      </ul>
    </body>
  </html>
  `;

  response.writeHead(200, { "Content-Type": "text/html" }).end(body);
}
