import { collection, limit, query, getDocs } from "firebase/firestore"
import { firestore } from "../firebase"
import { Skill } from "../models/skill";
import { getImage } from "./storageService";

const colname : string = 'skill'
const ref = collection(firestore, colname);

export async function getAll() : Promise<Skill[]> {
    const dataQuery = query(ref);
    return await getDocs(dataQuery).then(async e => {
        let result: Skill[] = [];
        result = await Promise.all(e.docs.map(async e => {
            const skill = e.data() as Skill;
            skill.iconUrl = await getImage(skill.icon);
            return skill;
        }));
        return result;
    }).catch(ex => {
        console.log(ex);
        return []
    })
}