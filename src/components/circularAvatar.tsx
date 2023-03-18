function shimer(width: string, height: string){
    return (
        <div class={`${width} ${height} rounded-full bg-gray-300 animate-pulse`}>
             <span class="bg-gradient-to-r from-gray-300 to-gray-400 h-full w-full rounded-full"></span>
        </div>
    )
}

export function avatar(url: string, width: string, height: string){
    return (
        <div class={`${width} ${height} rounded-full bg-gray-300`}>
             <span class="h-full w-full rounded-full justify-item-center"></span>
        </div>
    )
}