import { Navbar, Sidebar, VideoCard, PlaylistModal} from "../../Components/index"
import { useFilter } from "../../Context";
import { TabButtonChips } from "./TabsButtonChips";

export const Home = () => {
    const {filteredVideoList} = useFilter();
    return (
        <div className="body-template">
            <Navbar />
            <Sidebar />
            <PlaylistModal />
            <main className="main-box flex-column gap-2">
                <TabButtonChips />
                <div className="videoCard-box flex-row align-center justify-evenly gap-2">
                {
                    filteredVideoList.map((videoDetails) => (
                        <VideoCard key={videoDetails._id} videoDetails={videoDetails}/>
                    ))
                }
                </div>
            </main>
        </div>
    )
}