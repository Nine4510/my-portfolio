import { collection, getDocs, getFirestore, limit, query, QuerySnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import type { Project } from "../models/project";
import { getImage } from "./storageService";

const colname = "projects";
const db = collection(firestore, colname);

export async function getAllProject() : Promise<Project[]> {
    let dataQuery = query(db, limit(10));
    return await getDocs(dataQuery).then(async data => {
        if (data.empty) return [];

        return Promise.all(data.docs.map(async snapshot => {
            let project = snapshot.data() as Project;

            project.language = await Promise.all(project.language!.map(async e => {
                e.iconUrl = await getImage(e.icon);
                return e;
            }));

            project.technology = await Promise.all(project.technology!.map(async e => {
                e.iconUrl = await getImage(e.icon);
                return e;
            }));

            project.type = await Promise.all(project.type!.map(async e => {
                e.iconUrl = await getImage(e.icon);
                return e;
            }));

            return project;
        }));
    }).catch(ex => {
        console.log(ex);
        return [];
    });
}