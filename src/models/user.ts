import type { Social } from "./social";

export interface User {
    name?: string;
    aboutMe?: string,
    subtitle?: string,
    avatar?: string,
    socials?: Social[],
}