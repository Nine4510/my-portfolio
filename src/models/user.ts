import type { Social } from "./social";

export interface User {
    name: String,
    description: String,
    avatar: String,
    socials: Social[],
}