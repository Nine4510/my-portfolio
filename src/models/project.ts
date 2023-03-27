import type { Timestamp } from "firebase/firestore";
import type { Icon } from "./icon";

export interface Project{
    id?: string;
    name?: string;
    startDate?: Timestamp;
    endDate?: Timestamp;
    details?: string;
    language?: Icon[];
    technology?: Icon[];
    type?: Icon[];
    demo?: string;
}