import type { Icon } from "./icon";

export interface Skill {
    description?: string,
    icon?: string,
    iconUrl?: string,
    name?: string,
    languageUsed?: Icon[],
}