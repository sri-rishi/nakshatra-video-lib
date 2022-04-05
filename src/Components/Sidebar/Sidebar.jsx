import { AiOutlineHome, AiOutlineLike, MdOutlineWatchLater, MdPlaylistPlay, RiHistoryFill} from "../../assets";

export const Sidebar = () => {
    return (
        <aside className="aside-box">
            <ul className="aside-items-box flex-column ">
                <li className="aside-items flex-row gap-1">
                    <AiOutlineHome className="icon-vr-align mt-4-px"/> 
                    <span className="noto-fonts">Home</span>
                </li>
                <li className="aside-items flex-row gap-1">
                    <MdOutlineWatchLater className="icon-vr-align mt-4-px"/> 
                    <span className="noto-fonts">Watch Later</span>
                </li>
                <li className="aside-items flex-row gap-1">
                    <MdPlaylistPlay className="icon-vr-align mt-4-px"/>
                    <span className="noto-fonts">Playlists</span>
                </li>
                <li className="aside-items flex-row gap-1">
                    <AiOutlineLike className="icon-vr-align mt-4-px"/>
                    <span className="noto-fonts">Liked videos</span>
                </li>
                <li className="aside-items flex-row gap-1">
                    <RiHistoryFill className="icon-vr-align mt-4-px"/>
                    <span className="noto-fonts">History</span>
                </li>
            </ul>
        </aside>
    )
}