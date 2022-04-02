export const VideoCard = () => {
    return (
        <div className="video-card">
            <div className="thumb-div">
                <img className="img-responsive thumbnail" src="https://i.ytimg.com/vi/LxO-6rlihSg/0.jpg" alt="Thumbnail"/>
            </div>
            <div className="thumbnail-text flex-row align-center justify-center gap-8-px">
                <p className="text-ellipsis-overflow thumbnail-head">Learn Photography [Full Course] by Australian Geographic Photographer Chris Bray</p>
                <p>
                    2.3M views | 1 year ago
                </p>
            </div>
        </div>
    )
}