import Auth from "./Auth/Auth";
import FirebaseAuth from "./Databases/Firebase/Auth";

const firebaseAuth = new FirebaseAuth();
const auth = new Auth(firebaseAuth);

export {
  auth
};
