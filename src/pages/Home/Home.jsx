import { Button, Navbar, Sidebar, VideoCard } from "../../Components/index"
import { useData } from "../../Context/data.context";

export const Home = () => {
    const {videosList, categoryList} = useData();
    return (
        <div className="home-body">
            <Navbar />
            <Sidebar />
            <main className="main-box flex-column gap-2">
                <div className="chips-box flex-row justify-evenly">
                    {
                        categoryList.map(({_id, categoryName}) => (
                            <Button key={_id} className="btn-border-none tab-chips"  text={categoryName}/>
                        ))
                    }
               
                </div>
                <div className="videoCard-box flex-row align-center justify-evenly gap-2">
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