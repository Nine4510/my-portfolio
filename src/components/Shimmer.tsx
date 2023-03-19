export function shimmer(height: String, width: String) {
    return (
        <div>
            <div class={`bg-gray-300 animate-pulse rounded-md ${height} ${width}`}>
                <div class="bg-gradient-to-r from-gray-300 to-gray-400 h-full rounded-md"></div>
            </div>
        </div>
    )
}