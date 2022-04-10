import { useServiceData } from "../../Context";
import { RiDeleteBin5Fill } from "../../assets";
import { Navbar, Sidebar, VideoCard, EmptyPage, Button } from "../../Components/index";
import {deleteAllVideoFromHistory } from "../../ApiCalls";

export const HistoryPage = () => {
    const {historyVideoList, serviceListDispatch} = useServiceData();

    const clearAllFromVideo = () => {
        deleteAllVideoFromHistory(serviceListDispatch)
    }

    return (
        <div>
            <div className="body-template">
            <Navbar />
            <Sidebar />
            <main className="main-box flex-column gap-2">
                {
                    !historyVideoList.length ?
                    <EmptyPage 
                        imageSrc="https://ouch-cdn2.icons8.com/kS2IVLNNdtB_QvvEDXFvAg0wuKOrkGiXx3QRlnPszn8/rs:fit:1368:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMy82/YTk5NTJiMi1mNWVh/LTRkNDAtYjZlMi1h/ZGQzODUwYTIwMjUu/c3Zn.png" 
                        alt="Empty Watchlater" 
                        pageName="History"
                    />
                    :
                    <div className="flex-column align-center gap-2">
                        <Button 
                            className={"btn-border-none bg-transparent clear-all-btn flex-row align-center gap-8-px font-weight-6 color-red "} 
                            icon={<RiDeleteBin5Fill className="icon-vr-align gap-8-px mb-3-px "/>} 
                            text="Clear All" 
                            onClick={() => clearAllFromVideo()}
                        />
                        <div className="videoCard-box flex-row align-center justify-evenly gap-2">  
                        {
                            
                            historyVideoList.map((videoDetails) => (
                                <VideoCard key={videoDetails._id} videoDetails={videoDetails}/>
                            ))
                        }
                        </div>
                    </div>
                }
            </main>
        </div>
        </div>
    )
}