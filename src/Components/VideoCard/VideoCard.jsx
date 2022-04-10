import {useState} from "react";
import { Button } from "../index";
import { AiFillLike, BsThreeDotsVertical, MdOutlineWatchLater, MdPlaylistAdd } from "../../assets";
import { findItemInArray } from "../../Helper";
import { useServiceData } from "../../Context";
import { postVideoToWatchLater, deleteVideoFromWatchLater, postVideoToLikedVideo,  deleteVideoFromLikedVideo } from "../../ApiCalls";
import { Link } from "react-router-dom";


export const VideoCard = (props) => {
    const [showCtaBox, setShowCtaBox] = useState(false);
    const {watchLaterList, serviceListDispatch, likedVideoList} = useServiceData();

    const {
        _id,
        title,
        creator,
        categoryName,
        views,
        postedBefore
    } = props.videoDetails;

    const addToWatchLater = (video) => {
        postVideoToWatchLater(video, serviceListDispatch);
    }

    const addToLikedVideos = (video) => {
        postVideoToLikedVideo(video, serviceListDispatch)
    }

    const removeFromWatchLater = (id) => {
        deleteVideoFromWatchLater(id, serviceListDispatch)
    }

    const removeFromLikedVideo = (id) => {
        deleteVideoFromLikedVideo(id, serviceListDispatch);
    }

    const calculateView = (views) => {
        return Math.abs(Number(views)) >= 1.0e+9 
        ? (Math.abs(Number(views)) / 1.0e+9).toFixed(1) + "B"
        : Math.abs(Number(views)) >= 1.0e+6
        ?( Math.abs(Number(views)) / 1.0e+6).toFixed(1) + "M"
        : (Math.abs(Number(views))) >= 1.0e+3
        ? (Math.abs(Number(views)) / 1.0e+3).toFixed(1) + "K"
        : Math.abs(Number(views));
    }

    const watchLaterHandler = (id, video) => {
        findItemInArray(id, watchLaterList) ? removeFromWatchLater(id) : addToWatchLater(video)
    }

    const likedVideoHandler = (id, video) => {
        findItemInArray(id, likedVideoList) ? removeFromLikedVideo(id) : addToLikedVideos(video);
    }

    return (
        <div className="video-card">
            <div className="thumb-div">
                <Link to={`/video/${_id}`}>
                    <img className="img-responsive thumbnail" src={`https://i.ytimg.com/vi/${_id}/0.jpg`} alt="Thumbnail"/>
                </Link>
                <Button 
                    className="video-card-cta-btn btn-border-none" 
                    icon={<BsThreeDotsVertical className="icon-vr-align"/>}
                    onClick={() => setShowCtaBox(!showCtaBox)}
                />
                <ul className={`video-card-cta-box ${!showCtaBox ? "display-none": "flex-column"}`}>
                    <li className="video-cta-list-item cursor-pointer">
                        <Button 
                            className={"btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 thumbnail-cta-btn"} 
                            icon={<MdOutlineWatchLater className="icon-vr-align mb-3-px cta-icon"/>} 
                            text={findItemInArray(_id, watchLaterList) ? "Remove from Watch Later" : "Add to Watch Later"}
                            onClick={() => watchLaterHandler(_id, props.videoDetails)}
                        />
                    </li>
                    <li className="video-cta-list-item cursor-pointer">
                        <Button 
                            className={"btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 thumbnail-cta-btn"} 
                            icon={<MdPlaylistAdd className="icon-vr-align mb-3-px cta-icon"/>} 
                            text="Add to Playlist"
                        />
                    </li>
                </ul>
            </div>
            <div className="thumbnail-text flex-column gap-8-px">
                <p className="text-ellipsis-overflow thumbnail-head noto-fonts">
                    {title}
                </p>
                <div className="flex-row align-center justify-between">
                    <p className="flex-row align-center gap-8-px noto-fonts">
                        {calculateView(views)} <span className="point-div mt-3-px"></span> {postedBefore}
                    </p>
                    <Button 
                        className={`${findItemInArray(_id, likedVideoList) && `color-dark-primary `} btn-border-none bg-transparent like-btn`} 
                        icon={<AiFillLike className="icon-vr-align"/>} 
                        onClick={() => likedVideoHandler(_id, props.videoDetails)}
                    />
                </div>
            </div>
        </div>
    )
}