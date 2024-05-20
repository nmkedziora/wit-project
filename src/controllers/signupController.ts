import { IncomingMessage, ServerResponse } from "node:http";
import { getHtml } from "../views/signup";
import { parse } from "node:querystring";
import { RawUser, createUser } from "../models/User";
import { createSession } from "../models/Session";
import { createSessionCookie } from "../services/cookies";
import { RequestContext } from "../services/context";

export function renderSignup(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  const user = context.getUser();
  const html = getHtml(user);

  response.writeHead(200, { "Content-Type": "text/html" }).end(html);
}

export function signup(request: IncomingMessage, response: ServerResponse) {
  let data: string = "";

  request.on("data", (chunk) => (data += chunk.toString()));
  request.on("end", () => {
    // Create user
    const parsed = parse(data);
    const user = createUser(parsed as unknown as RawUser);

    // Create session
    const sessionId = createSession(user.id);

    // Create session cookie
    const sessionCookie = createSessionCookie(sessionId);

    // Set session cookie and redirect to homepage
    response
      .writeHead(302, {
        "Content-Type": "text/html",
        Location: "/",
        "Set-Cookie": sessionCookie,
      })
      .end();
  });
}
