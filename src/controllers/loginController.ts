import { IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:querystring";
import { getErrorHtml, getHtml } from "../views/login";
import { RequestContext } from "../services/context";
import { LoginCredentials, findUserByCredentials } from "../models/User";
import { createSession } from "../models/Session";
import { createSessionCookie } from "../services/cookies";

export function renderLogin(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const html = getHtml(user);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}

export function login(request: IncomingMessage, response: ServerResponse) {
  let data: string = "";

  request.on("data", (chunk) => (data += chunk.toString()));
  request.on("end", () => {
    // Read login credentials from request
    const credentials = parse(data) as unknown as LoginCredentials;

    // Check if user exists
    const user = findUserByCredentials(credentials);

    // If user exists:
    //   1. Create session
    //   2. Create session cookie
    //   3. Set session cookie and redirect to homepage
    if (user) {
      const sessionId = createSession(user.id);
      const sessionCookie = createSessionCookie(sessionId);

      response
        .writeHead(302, {
          "Content-Type": "text/html",
          Location: "/",
          "Set-Cookie": sessionCookie,
        })
        .end();

      return;
    }

    // If user does NOT exist
    // Render login error
    const html = getErrorHtml();

    response
      .writeHead(200, {
        "Content-Type": "text/html",
      })
      .end(html);
  });
}
