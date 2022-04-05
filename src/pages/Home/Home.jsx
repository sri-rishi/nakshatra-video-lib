import { Navbar, Sidebar, VideoCard } from "../../Components/index"
import { useData } from "../../Context/data.context";

export const Home = () => {
    const {videosList} = useData();
    return (
        <div className="home-body">
            <Navbar />
            <Sidebar />
            <main className="main-box">
                <div className="flex-row align-center justify-evenly gap-1">
                {
                    videosList.map((videoDetails) => (
                        <VideoCard key={videoDetails._id} videoDetails={videoDetails}/>
                    ))
                }
                </div>
            </main>
        </div>
    )
}