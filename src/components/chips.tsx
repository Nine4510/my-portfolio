import { For } from "solid-js";
import type { Chip } from "../models/pojo/chip";

export function chip(chip : Chip){
    return (
        <div class="flex w-min rounded-full h-10 bg-slate-800 text-white border-slate-200 border items-center pr-2">
            <div class="flex justify-center items-center aspect-square h-full rounded-full bg-slate-50 p-0.5">
                <img class="w-full h-full rounded-full object-cover" src= { chip.icon } alt= { chip.iconAlt }/>
            </div>
            <div class="flex w-min h-full ml-2 items-center">
                <div class="h-min w-min text-slate-100 text-sm pr-5 font-bold">
                    { chip.content }
                </div>
            </div>
            <div >
                { chip.action }
            </div>
        </div>
    );
}

export function chips(children : Chip[]) {
    return ( 
        <div class="flex flex-wrap self-center gap-1">
            <For each={children}>{(children) => chip(children)}</For>
        </div>
    )
}