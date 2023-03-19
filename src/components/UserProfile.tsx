import { createSignal, onMount, Show } from 'solid-js'
import { getUser } from "../services/userService";
import { avatar, avatarShimmer } from './circularAvatar';
import { getImage } from "../services/storageService";
import { shimmer } from "./shimmer";
import { chips, shimmerLoad } from './chips';
import "@fortawesome/fontawesome-free/css/all.min.css";

import type { User } from "../models/user";
import type { Chip } from "../models/pojo/chip"

export function UserProfile() {
    const [user, setUser] = createSignal<{data: User, isInitialized: boolean}>({data: {}, isInitialized: false});
    const [chipData, setChipData] = createSignal<Chip[]>([]);
    
    onMount(async () => {
        const current = await getUser();
        if (current.profilePict) current.profileUrl = await getImage(current.profilePict);
        if (current.socials) current.socials = await Promise.all(
            current.socials.map(async e => {
                var temp = e
                if (e.icon) temp.iconLink = await getImage(e.icon);
                return temp;
            })
        );
        const tempChips : Chip[] = current.socials!!.map(e => (
                {
                    icon: e.iconLink, 
                    iconAlt: e.alt, 
                    content: e.name, 
                    action: (
                            <a href={e.link}  target='_blank'>
                                <i class='fas fa-regular fa-arrow-up-right-from-square'></i>
                            </a>
                        )
                } as Chip)
            );
        setChipData(tempChips)
        setUser({data: current, isInitialized: true});
    });

    return (
        <div class='p-4 w-full'>
            <div class="pb-2">
                <Show when={ user().isInitialized } fallback={ shimmer('h-10', 'w-72') }>
                    <div class="text-4xl font-bold text-white">
                        Hi I'm { user().data.name }
                    </div>
                </Show>
            </div>
            <div class="pb-2">
                <Show when={ user().isInitialized } fallback={ shimmer('h-9', 'w-80') }>
                    <div class="text-2xl font-bold text-white">
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
            <div class='flex flex-row mt-2'>
                <div class="flex-none mr-4">
                    <Show when={ user().isInitialized }  fallback={ avatarShimmer('md:w-32 w-24', 'md:h-32 h-24') }>
                        <div class="text-sm text-white flex-wrap">
                            { avatar('md:w-32 w-24', 'md:h-32 h-24', user().data.profileUrl) }
                        </div>
                    </Show>
                </div>
                <div class="flex flex-1 place-items-center">
                    <Show when={ user().isInitialized } fallback={ shimmerLoad('h-full', true) }>
                        { chips(chipData()) }
                    </Show>
                </div>
            </div>
        </div>
    )
}