import type { Language } from "./language";

export interface Skill {
    description?: string,
    icon?: string,
    iconUrl?: string,
    name?: string,
    languageUsed?: Language[],
}