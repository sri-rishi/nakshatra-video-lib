import { useServiceData } from "../../Context"
import { EmptyPage, Navbar, Sidebar } from "../../Components/index";
import { PlaylistCard } from "./PlaylistCard";

export const Playlist = () => {
    const {allPlaylistArray} = useServiceData();

    console.log("This is", allPlaylistArray);

    return (
        <div>
            <div className="body-template">
            <Navbar />
            <Sidebar />
            <main className="main-box flex-column gap-2">
                {
                    !allPlaylistArray.length ?
                    <EmptyPage 
                        imageSrc="https://ouch-cdn2.icons8.com/kS2IVLNNdtB_QvvEDXFvAg0wuKOrkGiXx3QRlnPszn8/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMy82/YTk5NTJiMi1mNWVh/LTRkNDAtYjZlMi1h/ZGQzODUwYTIwMjUu/c3Zn.png" 
                        alt="Empty Watchlater" 
                        pageName="History"
                    />
                    :
                    <div className="videoCard-box flex-row align-center justify-evenly gap-2">  
                        {
                            
                            allPlaylistArray.map((playlistDetails) => (
                                <PlaylistCard key={playlistDetails._id} playlistDetails={playlistDetails}/>
                            ))
                        }
                    </div>
                    
                }
            </main>
        </div>
        </div>
    )
}