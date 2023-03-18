import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'

const env = import.meta.env;
const firebaseConfig = {
    apiKey: env.PUBLIC_API_KEY,
    authDomain: env.PUBLIC_AUTH_DOMAIN,
    projectId: env.PUBLIC_PROJECT_ID,
    storageBucket: env.PUBLIC_STORAGE_BUCKET,
    messagingSenderId: env.PUBLIC_MESSAGING_SENDER_ID,
    appId: env.PUBLIC_APP_ID
};
  

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleAuthProvider = new GoogleAuthProvider();