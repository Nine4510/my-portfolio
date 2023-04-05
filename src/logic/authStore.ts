import { atom } from 'nanostores' 
import { onAuthStateChanged } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth } from '../firebase';

onAuthStateChanged(auth, (user) => {
    isLogin.set(user);
});

export const isLogin = atom<User | null>(null);
