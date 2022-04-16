import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar,Sidebar, EmptyPage, VideoCard } from "../../Components/index";
import { getPlaylistFromPlaylists } from "../../ApiCalls";

export const SinglePlaylist = () => {
    const [playlistVideos, setPlaylistVideos] = useState();
    const [loader, setLoader] = useState(true);
    const {playlistId} = useParams();

    useEffect(() => {
        getPlaylistFromPlaylists (playlistId, setPlaylistVideos, setLoader);
    }, [playlistVideos]);

    if(loader) {
        return <h1>Loading ....</h1>
    }

    return (
        <div className="body-template">
            <Navbar />
            <Sidebar />
            <main className="main-box flex-column gap-2">
                {
                    !playlistVideos?.videos?.length
                    ?
                    <EmptyPage imageSrc="https://ouch-cdn2.icons8.com/kS2IVLNNdtB_QvvEDXFvAg0wuKOrkGiXx3QRlnPszn8/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMy82/YTk5NTJiMi1mNWVh/LTRkNDAtYjZlMi1h/ZGQzODUwYTIwMjUu/c3Zn.png" alt="Empty Watchlater" pageName="Playlist"/>
                    :
                    <div className="videoCard-box flex-row align-center justify-evenly gap-2">
                {
                    playlistVideos?.videos?.map((videoDetails) => (
                        <VideoCard key={videoDetails._id} videoDetails={videoDetails}/>
                    ))
                }
                </div>
                }
            </main>
        </div>
    )
}