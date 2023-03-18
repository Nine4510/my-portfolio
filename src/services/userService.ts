import { collection, limit, query, getDoc, getDocs } from "firebase/firestore"
import { firestore } from "../firebase"
import type { User } from "../models/user"

const colName = 'user'
const ref = collection(firestore, colName);

export async function getUser() : Promise<User> {
    const dataQuery = query(ref, limit(1));

    return await getDocs(dataQuery).then((e) => {
        if (e.empty) {
            alert("Data not found")
            return {}
        }
        const result = e.docs[0].data() as User;
        
        return result;
    }).catch((e) => {
        console.log(e);
        return {}
    });
}

