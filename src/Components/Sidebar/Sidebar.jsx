import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineLike, MdOutlineWatchLater, MdPlaylistPlay, RiHistoryFill} from "../../assets";

export const Sidebar = () => {

    const getActiveStyle = ({isActive}) => ({
        background: isActive && "var(--primary-color)",
        color: isActive && "var(--white-color)"
    })

    return (
        <aside className="aside-box">
            <ul className="aside-items-box flex-column gap-1">
                <NavLink to="/" style={getActiveStyle}>
                    <li className="aside-items flex-row gap-1">
                        <AiOutlineHome className="icon-vr-align mt-4-px"/> 
                        <span className="noto-fonts">Home</span>
                    </li>
                </NavLink>
                <NavLink to="/user/watchlater" style={getActiveStyle}>
                    <li className="aside-items flex-row gap-1">
                        <MdOutlineWatchLater className="icon-vr-align mt-4-px"/> 
                        <span className="noto-fonts">Watch Later</span>
                    </li>
                </NavLink>
                <li className="aside-items flex-row gap-1">
                    <MdPlaylistPlay className="icon-vr-align mt-4-px"/>
                    <span className="noto-fonts">Playlists</span>
                </li>
                <NavLink to="/user/likes" style={getActiveStyle}>
                    <li className="aside-items flex-row gap-1">
                        <AiOutlineLike className="icon-vr-align mt-4-px"/>
                        <span className="noto-fonts">Liked videos</span>
                    </li>
                </NavLink>
                <NavLink to="/user/history" style={getActiveStyle}>
                    <li className="aside-items flex-row gap-1">
                        <RiHistoryFill className="icon-vr-align mt-4-px"/>
                        <span className="noto-fonts">History</span>
                    </li>
                </NavLink>
            </ul>
        </aside>
    )
}