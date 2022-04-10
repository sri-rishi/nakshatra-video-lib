import { useParams } from "react-router-dom"
import YouTube from "react-youtube"
import { useEffect, useState } from "react";
import { getVideoById} from "../../ApiCalls";
import {Button, Navbar, Sidebar} from "../../Components/index";
import { historyHandler , addToLikedVideos, removeFromLikedVideo, findItemInArray, watchLaterHandler, calculateView} from "../../Helper";
import {AiOutlineDislike, AiOutlineLike, MdOutlineWatchLater, MdPlaylistAdd } from "../../assets";
import { useServiceData } from "../../Context";

export const SingleVideo = () => {
    const [video, setVideo] = useState();
    const {videoId} =  useParams();
    const {serviceListDispatch, likedVideoList, watchLaterList} = useServiceData()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getVideoById(videoId, setLoading, setVideo)
    }, [videoId]);

    if(loading) {
        return <h1>Loading ......</h1>
    }

    return(
        <div className="body-template">
            <Navbar />
            <Sidebar />
            <main className="main-box flex-column">
                <div className="video-box flex-column gap-2">
                    <div className="single-video-box">
                        <YouTube 
                            videoId={video?._id} 
                            containerClassName="single-video" 
                            className="youtube-video" 
                            onPlay={() => historyHandler(video, serviceListDispatch)}
                        />
                    </div>
                    <div className="flex-column gap-1">
                        <div className="video-title-box flex-column gap-8-px">
                            <p className="video-title noto-fonts">{video?.title}</p>
                            <p >{video?.creator}</p>
                        </div>
                        <div className="flex-row align-center justify-between video-action-box border-bottom">
                            <p className="flex-row align-center gap-8-px">
                                {calculateView(video?.views)} views 
                                <span className="point-div mt-3-px"></span> {video?.postedBefore}
                            </p>
                            <div className="flex-row align-center gap-1">
                                <Button 
                                    className={`btn-border-none bg-transparent video-cta-btn icon-size ${findItemInArray(video?._id, likedVideoList) && "color-dark-primary"}`} 
                                    icon={<AiOutlineLike className="icon-vr-align mr-1"/>}
                                    onClick={() => !findItemInArray(video?._id, likedVideoList) && addToLikedVideos(video, serviceListDispatch)}
                                />
                                <Button 
                                    className={`btn-border-none bg-transparent video-cta-btn icon-size `} 
                                    icon={<AiOutlineDislike className="icon-vr-align mr-1"/>}
                                    onClick={() => findItemInArray(video?._id, likedVideoList) && removeFromLikedVideo(video?._id, serviceListDispatch)}
                                />
                                <Button 
                                    className={`btn-border-none bg-transparent video-cta-btn`} 
                                    icon={<MdOutlineWatchLater className="icon-vr-align mr-8-px icon-size"/>} 
                                    text={findItemInArray(video?._id, watchLaterList) ? "Remove from Watch Later" : "Add to Watch Later"} 
                                    onClick={() => watchLaterHandler(video?._id, video, watchLaterList, serviceListDispatch)}
                                />
                                <Button 
                                    className={`btn-border-none bg-transparent video-cta-btn`} 
                                    icon={<MdPlaylistAdd className="icon-vr-align mr-8-px icon-size"/>} 
                                    text={`Add to playlist`} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}