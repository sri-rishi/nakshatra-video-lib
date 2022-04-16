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
                        imageSrc="https://img.freepik.com/free-vector/happy-girl-wearing-headphones-enjoying-playlist-listening-music-mobile-phone-singing-songs_74855-14053.jpg?w=2000" 
                        alt="Empty Playlist" 
                        pageText="You have't created any playlist"
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