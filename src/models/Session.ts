import { User, UserId, getUser } from "./User";

export type SessionId = string;

export class Session {
  id: SessionId;
  userId: UserId;

  constructor(id: SessionId, userId: number) {
    this.id = id;
    this.userId = userId;
  }

  getUser(): User {
    /*
      Skipped error handling intentionally.
      In prod-grade code, the user for the given userId may not exist.
      In that case, we should delete the related session.
    */
    return getUser(this.userId)!;
  }
}

const sessions = new Map<SessionId, Session>();

export function createSession(userId: UserId): SessionId {
  /*
  Very naive session ID generator. 
  Session IDs should be values that cannot be easily enumerated.
  In prod-grade code, we could use:
    * UUIDs,
    * cryptographically secure random numbers, or
    * session management libraries.
  */
  const sessionId: SessionId = Math.floor(Math.random() * 10000).toString();
  const session = new Session(sessionId, userId);

  /* 
  Intentionally skipped checking session collision.
  The chance that there already is such a session and we have accidentally generated an existing ID is negligible.
  In prod-grade code, though, uniqueness of the IDs should be somehow guaranteed.
  */

  sessions.set(sessionId, session);

  return sessionId;
}

export function getSession(id: SessionId): Session | undefined {
  return sessions.get(id);
}

export function deleteSession(id: SessionId) {
  sessions.delete(id);
}
