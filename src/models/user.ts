import type { Social } from "./social";

export interface MyUser {
    name?: string;
    aboutMe?: string,
    subtitle?: string,
    avatar?: string,
    socials?: Social[],
    profilePict?: string,
    profileUrl?: string,
}