import type { Icon } from "./icon";

export interface Project{
    id?: string;
    name?: string;
    startDate?: Date;
    endDate?: Date;
    details?: string;
    language?: Icon[];
    technology?: Icon[];
    type?: Icon[];
}