import { Session } from "./models/Session";

export class RequestContext {
  private session: Session | undefined;

  constructor() {}

  getSession() {
    return this.session;
  }

  setSession(session: Session | undefined) {
    this.session = session;
  }

  getUser() {
    return this.getSession()?.getUser();
  }
}
