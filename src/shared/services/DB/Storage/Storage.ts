import MomentStatus from '../../../types/MomentStatus.types';
import Event from '../../../types/Event.types';
import { IStorage, IAuth } from '../Databases/Databases.types';

class Storage {
  private database: IStorage;

  private auth: IAuth;

  constructor(database: IStorage, auth: IAuth) {
    this.database = database;
    this.auth = auth;
  }

  public async saveTable(eventId: string, table: MomentStatus[][]): Promise<void> {
    const { userId } = await this.auth.getUser();
    return this.database.saveTable(eventId, userId, table);
  }

  public async getTable(eventId: string): Promise<MomentStatus[][] | null> {
    const { userId } = await this.auth.getUser();
    return this.database.getTable(eventId, userId);
  }

  public getEvent(eventId: string): Promise<Event | null> {
    return this.database.getEvent(eventId);
  }
}

export default Storage;
