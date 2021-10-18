import { UserCredentials } from "../Shared/Model";
import * as Nedb from "nedb";

export class UserCredentialsDBAccess {
  private nedb: Nedb;

  constructor() {
    this.nedb = new Nedb("database/UserCredentials.db");
    this.nedb.loadDatabase();
  }

  public async putUserCredential(
    userCredentials: UserCredentials
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.nedb.insert(
        userCredentials,
        (err: Error | null, document: UserCredentials) => {
          if (err) {
            reject(err);
          } else {
            resolve(document);
          }
        }
      );
    });
  }

  public async getUserCredentials(
    username: string,
    password: string
  ): Promise<UserCredentials | undefined> {
    return new Promise((resolve, reject) => {
      this.nedb.find(
        { username: username, password: password },
        (err: Error, document: UserCredentials[]) => {
          if (err) {
            reject(err);
          } else {
            if (document.length == 0) {
              resolve(undefined);
            } else {
              resolve(document[0]);
            }
          }
        }
      );
    });
  }
}
