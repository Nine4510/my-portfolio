import { createSignal, For, onMount } from "solid-js";
import type { Skill } from "../models/skill";
import { getAll } from "../services/skillService";
import { avatar } from "./circularAvatar";

export function SkillView() {
    const [data, setData] = 
        createSignal<{isInitialized: boolean, data: Skill[]}>({isInitialized: false, data: []});
    
    onMount(async () => {
        let result = await getAll()
        setData({isInitialized: true, data: result});
    });

    return (
        <div class="flex flex-col w-full h-min p-2">
            <For each={ data().data }>
            { 
                data => (
                    <div class="flex flex-row gap-4 rounded-md bg-gray-700 p-2  w-full">
                        <div class="rounded-full aspect-square h-max p-3 bg-white">
                            <img class="h-full w-full object-scale-down" src={ data.iconUrl } alt={ data.name } />
                        </div>
                        <div class="flex flex-col text-white ">
                            <span class="font-bold flex-none">{ data.name }</span>
                            <span class="flex flex-wrap flex-1">{ data.description }</span>
                        </div>
                    </div>
                )
            }
            </For>
        </div>
    )
}