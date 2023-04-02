import { createResource, createSignal, For, Show } from "solid-js";
import type { Project } from "../models/project";
import { getAllProject } from "../services/projectService";

function shimmer(){
    return (
        <div></div>
    )
}

export function ProjectView(){
    const [data] = createResource<Project[]>(() => getAllProject());
    const intl = Intl.DateTimeFormat("en", { month: "long" , year: "numeric" });

    return (
        <div class="flex flex-col w-full h-min">
            <div class="text-white font-bold text-2xl mb-1" id="project">
                Project
            </div>
            <Show when={ data() } fallback={ shimmer() }>
                <For each={ data() }>
                { 
                    data => (
                        <div class="flex flex-col rounded-md border-2 text-white border-slate-500 bg-slate-900 mb-2 p-2 h-min w-full">
                            <span class="font-bold flex-none text-2xl">{ data.name }</span>
                            <span class="text-md text-slate-300">
                                { `${ intl.format(data.startDate?.toDate()) } - ${ intl.format(data.endDate?.toDate()) }` }
                            </span>
                            <div class="flex flex-wrap gap-2 my-2">
                                <For each={ data.type }>
                                    {
                                        e => (
                                            <div class="flex w-min rounded-full h-9 bg-orange-500 text-white items-center pr-2">
                                                <div class="flex justify-center items-center aspect-square h-full rounded-full bg-slate-50 p-1.5">
                                                    <img class="w-full h-full object-scale-down" src= { e.iconUrl } alt= { e.name }/>
                                                </div>
                                                <div class="flex w-min h-full ml-2 items-center">
                                                    <div class="h-min w-min text-slate-100 text-sm pr-5 font-bold">
                                                        { e.name }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </For>
                                <For each={ data.technology }>
                                    {
                                        e => (
                                            <div class="flex w-min rounded-full h-9 bg-blue-500 text-white items-center pr-2">
                                                <div class="flex justify-center items-center aspect-square h-full rounded-full bg-slate-50 p-1.5">
                                                    <img class="w-full h-full object-scale-down" src= { e.iconUrl } alt= { e.name }/>
                                                </div>
                                                <div class="flex w-min h-full ml-2 items-center">
                                                    <div class="h-min w-min text-slate-100 text-sm pr-5 font-bold">
                                                        { e.name }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </For>
                                <For each={ data.language }>
                                    {
                                        e => (
                                            <div class="flex w-min rounded-full h-9 bg-slate-500 text-white items-center pr-2">
                                                <div class="flex justify-center items-center aspect-square h-full rounded-full bg-slate-50 p-1.5">
                                                    <img class="w-full h-full object-scale-down" src= { e.iconUrl } alt= { e.name }/>
                                                </div>
                                                <div class="flex w-min h-full ml-2 items-center">
                                                    <div class="h-min w-min text-slate-100 text-sm pr-5 font-bold">
                                                        { e.name }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </For>
                            </div>
                            <div class="text-md mb-2 indent-4">{ data.details }</div>
                            <Show when={ data.demo }>
                                <a class="py-2 px-5 hover:bg-blue-500 bg-sky-800 border-2 border-blue-500 w-max font-bold text-sm self-end rounded-md" href={ data.demo } target="_blank">
                                    Live App
                                </a>
                            </Show>
                        </div>
                    )
                }
                </For>
            </Show>
        </div>
    );
}