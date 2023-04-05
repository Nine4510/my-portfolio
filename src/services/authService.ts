import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase";
import type { FirebaseError } from "firebase/app";

export async function login(username: string, password: string) : Promise<void> {
    await signInWithEmailAndPassword(auth, username, password)
        .catch(error => { 
            console.error(error);
        });
}