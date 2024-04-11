import { User } from "../models/User";
import {
  getHomeLink,
  getHtmlEnd,
  getHtmlStart,
  getPageHeader,
  getPageHeading,
} from "./partials";

export function getHtml(user: User | undefined): string {
  return `
    ${getHtmlStart()}
    ${getPageHeader(user)}
    ${getPageHeading("Sign up")}
    ${getHomeLink()}
    ${user ? getLoggedInContent() : getContent()}
    ${getHtmlEnd()}
  `;
}

function getLoggedInContent(): string {
  return `
    <h3>
      You've stumbled into the land of the already logged-in!
    </h3>
    <p>
      As a friendly reminder, your username is floating in the clouds of awesomeness.
    </p>
    <p>
      Feeling lost? Need a logout?
    </p>
    <p>
      Don't worry, I've got the exit sign ready whenever you're ready to leave this exclusive party!
    </p>
  `;
}

function getContent(): string {
  return `
    <h3>
      Already have an account? 
      <a href="/login">Log in</a>
    </h3>
    <form method="POST">
      <div>
      <label for="username"><b>Username</b></label>
      <input type="text" name="username" placeholder="Enter username" required>
      </div>

      <div>
      <label for="password"><b>Password</b></label>
      <input type="password" name="password" placeholder="Enter password" required>
      </div>

      <div>
      <label for="meal"><b>Favourite meal</b></label>
      <input type="text" name="meal" placeholder="Enter favourite meal" required>
      </div>
        
      <button type="submit">Sign up</button>
    </form>
  `;
}
