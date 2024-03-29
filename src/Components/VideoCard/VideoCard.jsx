import {useState} from "react";
import { Button } from "../index";
import { AiFillLike, BsThreeDotsVertical, MdOutlineWatchLater, MdPlaylistAdd, RiDeleteBin5Fill } from "../../assets";
import { useAuth, useServiceData, useToast } from "../../Context";
import {watchLaterHandler, likedVideoHandler, removeVideoFromHistory, calculateView, findItemInArray, playlistModalHandler} from "../../Helper";
import { Link, useLocation, useParams } from "react-router-dom";
import { deleteVideoFromPlaylist } from "../../ApiCalls";


export const VideoCard = (props) => {
    const [showCtaBox, setShowCtaBox] = useState(false);
    const {isUserLoggedIn} = useAuth();
    const {setToastData} = useToast();
    const {watchLaterList, serviceListDispatch, likedVideoList, historyVideoList, setShowPlaylistModal, setClickedPlaylistVideo, clickedPlaylistVideo} = useServiceData();
    const {playlistId} = useParams();
    const location = useLocation();
    const singlePlaylistPagePath = location.pathname === `/user/playlists/${playlistId}`;

    const {
        _id,
        title,
        creator,
        categoryName,
        views,
        postedBefore
    } = props.videoDetails;

    const playlistHandlerByPage = () => {
        return singlePlaylistPagePath ? 
        deleteVideoFromPlaylist(playlistId, _id, serviceListDispatch, setToastData) :
        playlistModalHandler(props.videoDetails, setShowPlaylistModal, setClickedPlaylistVideo, setToastData)
    }

    const showLoginRequest = () => {
        setToastData({
            toastText: "Kindly login first",
            toastDisplay: true,
            toastType: "warn"
        })
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
                            className={`btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 thumbnail-cta-btn ${findItemInArray(_id, watchLaterList) && "color-red"}`} 
                            icon={ findItemInArray(_id, watchLaterList) ? <RiDeleteBin5Fill className="icon-vr-align cta-icon mb-4-px"/>  :<MdOutlineWatchLater className="icon-vr-align cta-icon"/>} 
                            text={findItemInArray(_id, watchLaterList) ? "Remove from Watch Later" : "Add to Watch Later"}
                            onClick={() => !isUserLoggedIn ? showLoginRequest() : watchLaterHandler(_id, props.videoDetails, watchLaterList, serviceListDispatch, setToastData)}
                        />
                    </li>
                    <li className="video-cta-list-item cursor-pointer">
                        <Button 
                            className={`btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 thumbnail-cta-btn ${singlePlaylistPagePath && "color-red"}`} 
                            icon={singlePlaylistPagePath ? <RiDeleteBin5Fill className="icon-vr-align cta-icon mb-4-px"/> :<MdPlaylistAdd className="icon-vr-align cta-icon"/>} 
                            text={singlePlaylistPagePath ? "Remove From Playlist": "Add to playlist"}
                            onClick={() => !isUserLoggedIn ? showLoginRequest() : playlistHandlerByPage()}
                        />
                    </li>
                    {
                        findItemInArray(_id, historyVideoList) && (location.pathname === "/user/history")
                        ?
                        <li className="video-cta-list-item cursor-pointer">
                            <Button 
                                className={"btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 color-red"} 
                                icon={<RiDeleteBin5Fill className="icon-vr-align mb-4-px cta-icon"/>}
                                text="Remove from history" 
                                onClick={() => removeVideoFromHistory(_id, serviceListDispatch, setToastData)}
                            />
                        </li>
                        : ""
                    }
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
                        onClick={() => !isUserLoggedIn ? showLoginRequest() :  likedVideoHandler(_id, props.videoDetails, likedVideoList, serviceListDispatch, setToastData)}
                    />
                </div>
            </div>
        </div>
    )
}