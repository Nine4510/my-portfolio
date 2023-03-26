import { createResource, createSignal, For } from "solid-js";
import type { Project } from "../models/project";
import { getAllProject } from "../services/projectService";

function Shimmer(){
    return (
        <div></div>
    )
}

export function Project(){
    const [data] = createResource<Project[]>(() => getAllProject())

    return (
        <div class="flex flex-col w-full h-min">
            <div class="text-white font-bold text-2xl" id="project">
                Project
            </div>
            <For each={ data() }>
            { 
                data => (
                    <div class="flex flex-row gap-4 rounded-md border-2 border-slate-500 bg-slate-900 mb-2 p-2 h-min w-full">
                        <img src={ data.language![0].iconUrl } alt="" srcset="" />
                    </div>
                )
            }
            </For>
        </div>
    );
}