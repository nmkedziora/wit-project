import { IncomingMessage, ServerResponse } from "http";
import { routeRequest } from "../router";
import { getSession } from "../models/Session";
import { RequestContext } from "./context";
import { getSessionCookie } from "./cookies";

export function handleRequest(
  request: IncomingMessage,
  response: ServerResponse,
) {
  // Parse the request URL using new URL constructor
  const input = request.url as string;
  const base = `http://${request.headers.host}`;

  const myURL: URL = new URL(input, base);
  console.log(myURL);

  // Create request-related context with session details (if session exists)
  const context = createContext(request);

  // Route requests based on pathname and send respective response
  routeRequest(context, myURL, request, response);
}

function createContext(request: IncomingMessage): RequestContext {
  const context = new RequestContext();

  const sessionId = getSessionCookie(request);

  if (sessionId) {
    const session = getSession(sessionId);

    context.setSession(session);
  }

  return context;
}
