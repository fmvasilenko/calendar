import { User } from '../DB.types';

interface IAuth {
  signIn(): Promise<User>
  signOut(): Promise<null>
  getUser(): Promise<User>
}

export type {
  IAuth,
};
