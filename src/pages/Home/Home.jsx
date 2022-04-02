import { Navbar, VideoCard } from "../../Components/index"

export const Home = () => {
    return (
        <div>
            <Navbar />
            <main className="main-box">
                <VideoCard />
            </main>
        </div>
    )
}