import {VideoCard} from "../../Components/index"
import { useFilter } from "../../Context";
import { TabButtonChips } from "./tabsButtonChips";

export const Home = () => {
    const {filteredVideoList} = useFilter();
    return (
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
    )
}