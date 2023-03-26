import { collection, limit, query, getDocs } from "firebase/firestore"
import { firestore } from "../firebase"
import type { Skill } from "../models/skill";
import { getImage } from "./storageService";

const colname : string = 'skill'
const ref = collection(firestore, colname);

export async function getAllSkill() : Promise<Skill[]> {
    const dataQuery = query(ref);
    return await getDocs(dataQuery).then(async e => {
        if (e.empty) return [];
        
        return await Promise.all(
            e.docs.map(async data => {
                let skill = data.data() as Skill;
                skill.iconUrl = await getImage(skill.icon);
                skill.languageUsed = await Promise.all(skill.languageUsed!.map(
                    async language => {
                        language.iconUrl = await getImage(language.icon);
                        return language;
                    })
                );
                return skill;
            })
        );
    }).catch(ex => {
        console.log(ex);
        return [];
    })
}