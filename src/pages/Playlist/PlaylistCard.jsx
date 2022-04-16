import { AiOutlinePlayCircle, BsThreeDotsVertical, RiDeleteBin5Fill } from "../../assets";
import { Link } from "react-router-dom";
import {useState} from "react";
import { Button } from "../../Components/index";
import { useServiceData } from "../../Context";
import { removePlaylistHandler } from "../../Helper";

export const PlaylistCard = (props) => {
    const {serviceListDispatch} = useServiceData();
    const playlistDetails = props.playlistDetails;
    const [showCtaBox, setShowCtaBox] = useState(false);
    const coverImageId = playlistDetails?.videos[0]?._id
    const videosInPlaylist = playlistDetails?.videos?.length


    return (
        <div className="playlist-card video-card">
            <div className="thumb-div">
                <Link to={`/user/playlists/${playlistDetails?._id}`}>
                    <img className="img-responsive thumbnail" src={` https://i.ytimg.com/vi/${coverImageId}/0.jpg`} alt="Thumbnail"/>
                </Link>
                <div className={`${playlistDetails?.videos?.length <= 0 ? `display-none`: `flex-row`} overlay-div align-center justify-center`}>
                    <p className="flex-row align-center gap-8-px"><AiOutlinePlayCircle className="icon-vr-align mb-4-px"/><span>{videosInPlaylist}+</span></p>
                </div>
            </div>
            <div className="playlist-text flex-row justify-between align-center">
                <p className="text-ellipsis-overflow thumbnail-head noto-fonts">
                    {playlistDetails.title}
                </p>
                <Button 
                    className="playlist-card-cta-btn btn-border-none" 
                    icon={<BsThreeDotsVertical className="icon-vr-align"/>}
                    onClick={() => setShowCtaBox(!showCtaBox)}
                />
                <ul className={`playlist-card-cta-box ${!showCtaBox ? "display-none": "flex-column"}`}>
                    <li className="video-cta-list-item cursor-pointer">
                        <Button 
                            className={"btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 thumbnail-cta-btn color-red"} 
                            icon={<RiDeleteBin5Fill className="icon-vr-align mb-4-px cta-icon"/>} 
                            text="Delete playlist"
                            onClick={() => removePlaylistHandler(playlistDetails._id, serviceListDispatch)}
                        />
                    </li>
                </ul>
            </div> 
        </div>
    )
}