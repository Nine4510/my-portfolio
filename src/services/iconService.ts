import { collection, limit, query, getDocs, getDoc } from "firebase/firestore"
import { firestore } from "../firebase"
import type { Icon } from "../models/icon";
import type { Skill } from "../models/skill";
import { getImage } from "./storageService";

const collectionName = 'icon';
const db = collection(firestore, collectionName);

export function getIcon(id: string) : Icon {
    let queryString = query(db,);
    return {}
}