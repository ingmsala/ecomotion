import {getAuth, signInWithPopup, signOut} from 'firebase/auth';
import {provider} from '../api/firebase';

export const loginWithGoogleService = async () => {
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const logoutGoogleService = async () => {
  const auth = getAuth();
  return signOut(auth).then(() => null);
};
