import FirebaseAuth from './Databases/Firebase/Auth';
import FirebaseStorage from './Databases/Firebase/Storage';
import Auth from './Auth/Auth';
import Storage from './Storage/Storage';

const firebaseAuth = new FirebaseAuth();
const auth = new Auth(firebaseAuth);

const firebaseStorage = new FirebaseStorage();
const storage = new Storage(firebaseStorage, auth);

export {
  auth,
  storage,
};
