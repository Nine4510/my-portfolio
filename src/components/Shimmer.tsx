export function shimmer(height: String, width: String) {
    return (
        <div>
            <div class={`bg-gray-300 animate-pulse rounded-md ${height} ${width}`}>
                <div class="bg-gradient-to-r from-gray-300 to-gray-400 h-full rounded-md"></div>
            </div>
        </div>
    )
}


export function chips() {
    return (
            <div class="flex flex-wrap space-x-2">
                <div class="w-16 h-6 bg-white"></div>
                <div class="w-16 h-6 bg-white"></div>
                <div class="w-16 h-6 bg-white"></div>
                <div class="w-16 h-6 bg-white"></div>
            </div>
    )
    // return (
    //     <div class="flex flex-wrap">
    //         <span class="inline-flex items-center px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
    //             Tag 1
    //         </span>
    //         <span class="inline-flex items-center px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
    //             Tag 2
    //         </span>
    //         <span class="inline-flex items-center px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
    //             Tag 3
    //         </span>
    //         <span class="inline-flex items-center px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
    //             Tag 4
    //         </span>
    //     </div>
    // )
}