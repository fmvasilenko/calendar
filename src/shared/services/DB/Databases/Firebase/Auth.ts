import firebase from 'firebase/app';
import 'firebase/auth';

import { User } from '../../DB.types';
import Unauthorized from '../../Errors/Unauthorized';
import { IAuth } from '../Databases.types';

import config from './Config';

class Auth implements IAuth {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    this.bindMethods();
  }

  public signIn(): Promise<User> {
    const provider = new firebase.auth.GoogleAuthProvider();

    return new Promise((resolve, reject) => {
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          if (result.user) resolve(this.getUserData(result.user));
          else reject();
        })
        .catch((error) => console.log(error));
    });
  }

  public signOut(): Promise<null> {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(() => {
        resolve(null);
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  public getUser(): Promise<User> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) resolve(this.getUserData(user));
        else reject(new Unauthorized());
      });
    });
  }

  private getUserData(user: firebase.User) {
    const { displayName, photoURL } = user;
    const nameArray = displayName?.split(' ');

    return {
      name: nameArray ? nameArray[0] : '',
      lastName: nameArray ? nameArray[1] : '',
      photo: photoURL || '',
    };
  }

  private bindMethods() {
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.getUser = this.getUser.bind(this);
  }
}

export default Auth;
