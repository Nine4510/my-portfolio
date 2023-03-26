import { createResource, createSignal, For, onMount } from "solid-js";
import type { Skill } from "../models/skill";
import { getAllSkill } from "../services/skillService";
import { avatar } from "./circularAvatar";
import { chips } from "../components/chips";

export function SkillView() {
    const [data] = createResource<Skill[]>(() => getAllSkill())

    return (
        <div class="flex flex-col w-full h-min">
            <div class="text-white font-bold text-2xl" id="skill">
                Skill
            </div>
            <For each={ data() }>
            { 
                data => (
                    <div class="flex flex-row gap-4 rounded-md border-2 border-slate-500 bg-slate-900 mb-2 p-2 h-min w-full">
                        <div class="flex-none rounded-full aspect-square h-16 p-3 bg-white">
                            <img class="h-full w-full object-scale-down" src={ data.iconUrl } alt={ data.name } />
                        </div>
                        <div class="flex flex-1 flex-col text-white gap-2">
                            <span class="font-bold flex-none text-xl">{ data.name }</span>
                            <div class="flex-1">
                                { 
                                    chips(data.languageUsed!.map(
                                        e => ({ icon: e.iconUrl, iconAlt: e.icon, content: e.name })
                                    )) 
                                }
                            </div>
                            <span class="flex flex-wrap flex-1">{ data.description }</span>
                        </div>
                    </div>
                )
            }
            </For>
        </div>
    )
}