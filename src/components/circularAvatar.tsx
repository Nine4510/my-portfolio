export function avatarShimmer(width: string, height: string){
    return (
        <div class={`${width} ${height} rounded-full bg-gray-300 animate-pulse`}>
            <span class="bg-gradient-to-r from-gray-300 to-gray-400 h-full w-full rounded-full"></span>
        </div>
    )
}

export function avatar(width: string, height: string , url?: string ){
    return (
        <div class={`${width} ${height} rounded-full bg-gray-300`}>
            <img class="h-full w-full rounded-full object-cover object-top" src={ url ?? '/public/empty-profile.svg' } alt="profile"/>
        </div>
    )
}