import type { JSXElement } from "solid-js";

export interface Chip {
    icon? : string,
    iconAlt? : string,
    content? : string,
    action? : JSXElement,
}