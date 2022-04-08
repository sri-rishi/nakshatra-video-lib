import { EmptyPage, Navbar, Sidebar, VideoCard } from "../../Components/index";
import { useServiceData } from "../../Context";


export const WatchLater = () => {
    const {watchLaterList} = useServiceData();
    return (
        <div className="body-template">
            <Navbar />
            <Sidebar />
            <main className="main-box flex-column gap-2">
                {
                    !watchLaterList.length ?
                    <EmptyPage imageSrc="https://ouch-cdn2.icons8.com/kS2IVLNNdtB_QvvEDXFvAg0wuKOrkGiXx3QRlnPszn8/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMy82/YTk5NTJiMi1mNWVh/LTRkNDAtYjZlMi1h/ZGQzODUwYTIwMjUu/c3Zn.png" alt="Empty Watchlater" pageName="Watch Later"/>
                    :
                    <div className="videoCard-box flex-row align-center justify-evenly gap-2">
                {
                    watchLaterList.map((videoDetails) => (
                        <VideoCard key={videoDetails._id} videoDetails={videoDetails}/>
                    ))
                }
                </div>
                }
            </main>
        </div>
    )
}