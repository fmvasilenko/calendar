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

  public getTable(eventId: string, userId: string): Promise<MomentStatus[][] | null> {
    return firebase.database().ref(`tables/${eventId}/${userId}`)
      .once('value')
      .then(this.getDataOutOfSnapShot);
  }

  private getDataOutOfSnapShot(snapshot: firebase.database.DataSnapshot) {
    return snapshot.val();
  }

}

export default Storage;
