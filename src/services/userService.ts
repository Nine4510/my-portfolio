import { collection, limit, query, getDocs } from "firebase/firestore"
import { firestore } from "../firebase"
import type { User } from "../models/user"
import { getImage } from "./storageService";

const colName = 'user'
const ref = collection(firestore, colName);

export async function getUser() : Promise<User> {
    const dataQuery = query(ref, limit(1));

    return await getDocs(dataQuery).then(async (e) => {
        if (e.empty) {
            alert("Data not found");
            return {};
        }
        const result = e.docs[0].data() as User;
        result.profileUrl = await getImage(result.profilePict);
        if (result.socials){
            result.socials = await Promise.all(
                result.socials.map(
                    async e => {
                        e.iconLink = await getImage(e.icon);
                        return e;
                    }
                )
            );
        }
        // if (result.socials){
        //     result.socials = await Promise.all(result.socials.map(
        //         async e => {
        //             e.iconLink = await getImage(e.link);
        //             return e;
        //         }
        //     ));
        // }

        return result;
    }).catch((e) => {
        console.log(e);
        return {};
    });
}

