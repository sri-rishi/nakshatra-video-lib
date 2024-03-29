import { VideoCard, EmptyPage} from "../../Components/index"
import { useServiceData } from "../../Context"

export const LikedVideos = () => {
    const {likedVideoList} = useServiceData();
    return (
        <main className="main-box flex-column gap-2">
            {
                !likedVideoList.length 
                ?
                <EmptyPage imageSrc="https://ouch-cdn2.icons8.com/kS2IVLNNdtB_QvvEDXFvAg0wuKOrkGiXx3QRlnPszn8/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMy82/YTk5NTJiMi1mNWVh/LTRkNDAtYjZlMi1h/ZGQzODUwYTIwMjUu/c3Zn.png" alt="Empty liked page" pageText="You have't liked any video"/>
                :
                <div className="videoCard-box flex-row align-center justify-evenly gap-2">
            {
                likedVideoList.map((videoDetails) => (
                    <VideoCard key={videoDetails._id} videoDetails={videoDetails}/>
                )).reverse()
            }
            </div>
            }
        </main>
    )
}