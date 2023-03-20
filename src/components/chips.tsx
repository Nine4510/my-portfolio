import { For } from "solid-js";
import type { Chip } from "../models/pojo/chip";

export function chip(chip : Chip){
    return (
        <div class="flex w-min rounded-full h-8 bg-slate-800 text-white border-slate-200 border items-center pr-2">
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

export function shimmerLoad(height? : string, isList? : boolean){
    const chip = 
        (
            <div class={`${ isList ? 'bg-white' : 'bg-gray-300' } animate-pulse rounded-full h-10 w-24`}>
                <div class={`bg-gradient-to-r ${isList? 'from-white' : 'from-gray-300'} ${isList? 'to-slate-200' : 'to-gray-400'} h-full rounded-full`}></div>
            </div>
        );
    
    const chips = Array(5).fill(chip);
    
    if (isList) {
        return (
            <div class={`bg-gray-300 animate-pulse rounded-md ${ height ? height : 'h-20' } w-full`}>
                <div class="flex flex-wrap bg-gradient-to-r from-gray-300 to-gray-400 h-full rounded-md p-1 ">
                    <div class="flex flex-wrap h-min gap-1">
                        <For each={ chips }>{ chips => chips }</For>
                    </div>
                </div>
            </div>
        );
    }

    return chip;
}

export function chips(children : Chip[]) {
    return ( 
        <div class="flex flex-wrap gap-1">
            <For each={children}>{(children) => chip(children)}</For>
        </div>
    );
}