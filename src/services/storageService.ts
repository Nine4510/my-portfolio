import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";

export async function getImage(url: string) : Promise<string> {
    let reference = ref(storage, url);
    return await getDownloadURL(reference);
}