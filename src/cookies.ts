/*
This is an overkill - in prod-grade code you'd rather use a tool that handles HTTP session management.
The purpose of this code is educational - to learn how such frameworks work under the hood.
*/

import { IncomingMessage } from "node:http";
import { SessionId } from "./models/Session";

const SESSION_COOKIE = "sessionId";
const COOKIES_SEPARATOR = "; ";

export function createSessionCookie(sessionId: SessionId): string {
  return `${SESSION_COOKIE}=${sessionId}`;
}

export function getSessionCookie(request: IncomingMessage): string | undefined {
  const cookies = request.headers.cookie;

  if (!cookies) {
    return;
  }

  const header = cookies.split(COOKIES_SEPARATOR);

  for (let cookie of header) {
    if (cookie.startsWith(SESSION_COOKIE)) {
      return cookie.split("=")[1];
    }
  }
}

export function deleteSessionCookie() {
  return `${SESSION_COOKIE}=; Max-Age=0; Expires: ${Date.now()}`;
}
