import { IAuth } from '../Databases/Databases.types';
import { User } from '../DB.types';

class Auth {
  private database: IAuth;

  private user: User | null = null;

  constructor(database: IAuth) {
    this.database = database;
    this.bindMethods();
  }

  public async signIn(): Promise<User> {
    this.user = await this.database.signIn();
    return this.user;
  }

  public signOut(): Promise<null> {
    this.user = null;
    return this.database.signOut();
  }

  public async getUser(): Promise<User> {
    if (!this.user) this.user = await this.database.getUser();
    return this.user;
  }

  private bindMethods() {
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.getUser = this.getUser.bind(this);
  }
}

export default Auth;
