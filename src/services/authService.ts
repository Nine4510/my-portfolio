import { signInWithEmailAndPassword } from "firebase/auth";
import type { UserCredential } from "firebase/auth"
import { auth } from "../firebase";

export let user : UserCredential | null = null;

export async function login(username: string, password: string) : Promise<UserCredential | null> {
    try {
        user = await signInWithEmailAndPassword(auth, username, password);
        return user;
    } 
    catch(error) {
        return null;
    }
}