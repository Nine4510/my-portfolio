import { createMemo, createResource, Show} from 'solid-js'
import { getUser } from "../services/userService";
import { avatar, avatarShimmer } from './circularAvatar';
import { shimmer } from "./shimmer";
import { chips, shimmerLoad } from './chips';
import "@fortawesome/fontawesome-free/css/all.min.css";

import type { User } from "../models/user";
import type { Chip } from "../models/pojo/chip"

export  function UserProfile() {
    const [user] = createResource<User>(() => getUser());
    const chip = createMemo<Chip[]>(() => {
        let result : Chip[] = [];

        if (user()) {
            result = user()!.socials!.map(
                e => ({
                    icon: e.iconLink,
                    iconAlt: e.alt, 
                    content: e.name, 
                    action: (
                                <a href={e.link}  target='_blank'>
                                    <i class='fas fa-regular fa-arrow-up-right-from-square'></i>
                                </a>
                            )
                } as Chip)
            )
        }

        return result;
    })

    return (
        <div class='w-full'>
            <div class="pb-2">
                <Show when={ user() } fallback={ shimmer('h-10', 'w-72') }>
                    <div class="text-4xl font-bold text-white">
                        Hi I'm { user()?.name }
                    </div>
                </Show>
            </div>
            <div class="pb-2">
                <Show when={ user() } fallback={ shimmer('h-9', 'w-80') }>
                    <div class="text-2xl font-bold text-white">
                        { user()?.subtitle }
                    </div>
                </Show>
            </div>
            <div class="pb-2">
                <Show when={ user() } fallback={ shimmer('h-20', 'w-full') }>
                    <div class="text-sm text-white flex-wrap">
                        { user()?.aboutMe }
                    </div>
                </Show>
            </div>
            <div class='flex flex-row mt-2'>
                <div class="flex-none mr-4">
                    <Show when={ user() }  fallback={ avatarShimmer('w-28', 'h-28') }>
                        <div class="text-sm text-white flex-wrap">
                            { avatar('w-28', 'h-28', user()?.profileUrl) }
                        </div>
                    </Show>
                </div>
                <div class="flex flex-1 place-items-center">
                    <Show when={ user() } fallback={ shimmerLoad('h-full', true) } >
                        { chips(chip()) }
                    </Show>
                </div>
            </div>
        </div>
    )
}
