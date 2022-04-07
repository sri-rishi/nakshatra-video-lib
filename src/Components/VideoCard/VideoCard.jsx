import {useState} from "react";
import { Button } from "../index";
import { AiFillLike, BsThreeDotsVertical, MdOutlineWatchLater, MdPlaylistAdd } from "../../assets";
import { findItemInArray } from "../../Helper";
import { useServiceData } from "../../Context";


export const VideoCard = (props) => {
    const [showCtaBox, setShowCtaBox] = useState(false);
    const {watchLaterList, addToWatchLater} = useServiceData();

    const {
        _id,
    title,
    creator,
    categoryName,
    views,
    postedBefore
    } = props.videoDetails;

    const calculateView = (views) => {
        return Math.abs(Number(views)) >= 1.0e+9 
        ? (Math.abs(Number(views)) / 1.0e+9).toFixed(1) + "B"
        : Math.abs(Number(views)) >= 1.0e+6
        ?( Math.abs(Number(views)) / 1.0e+6).toFixed(1) + "M"
        : (Math.abs(Number(views))) >= 1.0e+3
        ? (Math.abs(Number(views)) / 1.0e+3).toFixed(1) + "K"
        : Math.abs(Number(views));
    }

    const moveToWatchLater = (id, video) => {
        findItemInArray(id, watchLaterList) ? alert("Aleardy added in Watch later") : addToWatchLater(video)
    }

    return (
        <div className="video-card">
            <div className="thumb-div">
                <img className="img-responsive thumbnail" src={`https://i.ytimg.com/vi/${_id}/0.jpg`} alt="Thumbnail"/>
                <Button 
                    className="video-card-cta-btn btn-border-none" 
                    icon={<BsThreeDotsVertical className="icon-vr-align"/>}
                    onClick={() => setShowCtaBox(!showCtaBox)}
                />
                <ul className={`video-card-cta-box ${!showCtaBox ? "display-none": "flex-column"}`}>
                    <li className="video-cta-list-item cursor-pointer">
                        <Button 
                            className={"btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 video-cta-btn"} 
                            icon={<MdOutlineWatchLater className="icon-vr-align mb-3-px cta-icon"/>} 
                            text="Add to Watch Later"
                            onClick={() => moveToWatchLater(_id, props.videoDetails)}
                        />
                    </li>
                    <li className="video-cta-list-item cursor-pointer">
                        <Button className={"btn-border-none bg-transparent flex-row align-center gap-8-px font-weight-6 video-cta-btn"} icon={<MdPlaylistAdd className="icon-vr-align mb-3-px cta-icon"/>} text="Add to Playlist"/>
                    </li>
                </ul>
            </div>
            <div className="thumbnail-text flex-column gap-8-px">
                <p className="text-ellipsis-overflow thumbnail-head noto-fonts">
                    {title}
                </p>
                <div className="flex-row align-center justify-between">
                    <p className="flex-row align-center gap-8-px noto-fonts">
                        {calculateView(views)} <span className="point-div mt-3-px"></span> 1 year ago
                    </p>
                    <Button className={`btn-border-none bg-transparent like-btn`} icon={<AiFillLike className="icon-vr-align"/>} />
                </div>
            </div>
        </div>
    )
}