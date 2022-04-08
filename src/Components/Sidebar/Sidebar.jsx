import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLike, MdOutlineWatchLater, MdPlaylistPlay, RiHistoryFill} from "../../assets";

export const Sidebar = () => {
    return (
        <aside className="aside-box">
            <ul className="aside-items-box flex-column gap-1">
                <Link to="/">
                    <li className="aside-items flex-row gap-1">
                        <AiOutlineHome className="icon-vr-align mt-4-px"/> 
                        <span className="noto-fonts">Home</span>
                    </li>
                </Link>
                <Link to="/user/watchlater" >
                    <li className="aside-items flex-row gap-1">
                        <MdOutlineWatchLater className="icon-vr-align mt-4-px"/> 
                        <span className="noto-fonts">Watch Later</span>
                    </li>
                </Link>
                <li className="aside-items flex-row gap-1">
                    <MdPlaylistPlay className="icon-vr-align mt-4-px"/>
                    <span className="noto-fonts">Playlists</span>
                </li>
                <Link to="/user/likes">
                    <li className="aside-items flex-row gap-1">
                        <AiOutlineLike className="icon-vr-align mt-4-px"/>
                        <span className="noto-fonts">Liked videos</span>
                    </li>
                </Link>
                <li className="aside-items flex-row gap-1">
                    <RiHistoryFill className="icon-vr-align mt-4-px"/>
                    <span className="noto-fonts">History</span>
                </li>
            </ul>
        </aside>
    )
}