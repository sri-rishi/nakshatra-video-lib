import { EmptyPage, VideoCard } from "../../Components/index";
import { useServiceData } from "../../Context";


export const WatchLater = () => {
    const {watchLaterList} = useServiceData();
    return (
        <main className="main-box flex-column gap-2">
            {
                !watchLaterList.length ?
                <EmptyPage imageSrc="https://img.freepik.com/free-vector/happy-girl-wearing-headphones-enjoying-playlist-listening-music-mobile-phone-singing-songs_74855-14053.jpg?w=2000" alt="Empty Watchlater" pageText="There is nothing to watch"/>
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
    )
}