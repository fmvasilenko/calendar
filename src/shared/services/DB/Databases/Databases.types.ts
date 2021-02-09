import MomentStatus from '../../../types/MomentStatus.types';
import { User } from '../DB.types';

interface IAuth {
  signIn(): Promise<User>
  signOut(): Promise<null>
  getUser(): Promise<User>
}

interface IStorage {
  saveTable(eventId: string, userId: string, table: MomentStatus[][]): Promise<void>
  getTable(eventId: string, userId: string): Promise<MomentStatus[][] | null>
}

export type {
  IAuth,
  IStorage,
};
