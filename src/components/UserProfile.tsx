import { createSignal, onMount, Show } from 'solid-js'
import type { User } from "../models/user";
import { getUser } from "../services/userService";
import { avatar } from './circularAvatar';
import { shimmer, chips } from "./Shimmer";

export function UserProfile() {
    const [user, setUser] = createSignal<{data: User, isInitialized: boolean}>({data: {}, isInitialized: false});
    
    // onMount(async () => {
    //     const current  = await getUser();
    //     setUser({data: current, isInitialized: true});
    // });

    return (
        <div class='p-4'>
            <div class="pb-2">
                <Show when={ user().isInitialized } fallback={ shimmer('h-10', 'w-72') }>
                    <div class="text-lg font-bold text-white">
                        Hi I'm { user().data.name }
                    </div>
                </Show>
            </div>
            <div class="pb-2">
                <Show when={ user().isInitialized } fallback={ shimmer('h-9', 'w-80') }>
                    <div class="text-md font-bold text-white">
                        { user().data.subtitle }
                    </div>
                </Show>
            </div>
            <div class="pb-2">
                <Show when={ user().isInitialized } fallback={ shimmer('h-20', 'w-full') }>
                    <div class="text-sm text-white flex-wrap">
                        { user().data.aboutMe }
                    </div>
                </Show>
            </div>
            <div class='flex'>
                <div class="flex-none">
                    <Show when={ user().isInitialized } 
                        fallback={ avatar('','','') }>
                        <div class="text-sm text-white flex-wrap">
                            { user().data.aboutMe }
                        </div>
                    </Show>
                </div>
                <div class="flex-auto pl-4">
                    { chips() }
                </div>
            </div>
        </div>
    )
}