import "./loading.css"
function Loading() {
    return (
        // Loading screen
        <div className="loading-background">
            <div className="loading">
                <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
        </div>
    )
}
export default Loading