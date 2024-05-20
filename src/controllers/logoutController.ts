import { IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:querystring";
import { getHtml } from "../views/login";
import { RequestContext } from "../services/context";
import { deleteSession } from "../models/Session";
import { deleteSessionCookie } from "../services/cookies";

export function logout(
  context: RequestContext,
  request: IncomingMessage,
  response: ServerResponse,
) {
  // Delete session
  const session = context.getSession();

  if (session) {
    deleteSession(session.id);
  }

  // Delete session cookie and redirect to homepage
  const sessionCookie = deleteSessionCookie();

  response
    .writeHead(302, {
      "Content-Type": "text/html",
      Location: "/",
      "Set-Cookie": sessionCookie,
    })
    .end();
}
