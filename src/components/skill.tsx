import { createResource, createSignal, For, Show } from "solid-js";
import type { Skill } from "../models/skill";
import { chips } from "../components/chips";
import { getAllSkill } from "../services/skillService";

function shimmer() {
    return (
        <div>
            <div class='bg-gray-300 animate-pulse rounded-md h-min'>
                <div class="bg-gradient-to-r from-gray-300 to-gray-400 h-full rounded-md p-2 flex flex-row">
                    <div class="flex-none rounded-full aspect-square h-16 bg-white">
                        <div class="w-full h-full rounded-full bg-gradient-to-r from-white to-slate-200"></div>
                    </div>
                    <div class="flex flex-auto flex-col ml-2 gap-2">
                        <div class="flex-none rounded-md h-8 w-2/3 bg-white overflow-hidden">
                            <div class="w-full h-full bg-gradient-to-r from-white to-slate-200"></div>
                        </div>
                        <div class="flex-none rounded-full h-8 w-24 bg-white overflow-hidden">
                            <div class="w-full h-full bg-gradient-to-r from-white to-slate-200"></div>
                        </div>
                        <div class="flex-none rounded-md h-24 w-full bg-white overflow-hidden">
                            <div class="w-full h-full bg-gradient-to-r from-white to-slate-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SkillView() {
    const [data] = createResource<Skill[]>(() => getAllSkill());

    return (
        <div class="flex flex-col w-full h-min">
            <div class="text-white font-bold text-2xl mb-1" id="skill">
                Skill
            </div>
            <Show when={ data() } fallback= { shimmer() }>
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
            </Show>
        </div>
    )
}