import firebase from 'firebase';

import MomentStatus from '../../../../types/MomentStatus.types';
import { IStorage } from '../Databases.types';

import config from './Config';

class Storage implements IStorage {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  public saveTable(eventId: string, userId: string, table: MomentStatus[][]): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase.database().ref(`tables/${eventId}/${userId}`).set(table, (error) => {
        if (error) reject(error);
        resolve();
      });
    });
  }
}

export default Storage;
