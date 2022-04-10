import { useServiceData } from "../../Context"
import { Navbar, Sidebar, VideoCard, EmptyPage } from "../../Components/index";

export const HistoryPage = () => {
    const {historyVideoList} = useServiceData();
    return (
        <div>
            <div className="body-template">
            <Navbar />
            <Sidebar />
            <main className="main-box flex-column gap-2">
                {
                    !historyVideoList.length ?
                    <EmptyPage imageSrc="https://ouch-cdn2.icons8.com/kS2IVLNNdtB_QvvEDXFvAg0wuKOrkGiXx3QRlnPszn8/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMy82/YTk5NTJiMi1mNWVh/LTRkNDAtYjZlMi1h/ZGQzODUwYTIwMjUu/c3Zn.png" alt="Empty Watchlater" pageName="Watch Later"/>
                    :
                    <div className="videoCard-box flex-row align-center justify-evenly gap-2">
                {
                    historyVideoList.map((videoDetails) => (
                        <VideoCard key={videoDetails._id} videoDetails={videoDetails}/>
                    ))
                }
                </div>
                }
            </main>
        </div>
        </div>
    )
}