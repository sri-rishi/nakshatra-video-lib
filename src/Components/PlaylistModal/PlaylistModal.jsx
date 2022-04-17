import { Button } from "../index/index";
import { AiOutlinePlus,VscClose } from "../../assets";
import { useServiceData, useToast } from "../../Context";
import {useState} from "react";
import { newPlaylistHandler , handlePlaylist} from "../../Helper";


export const PlaylistModal = () => {
    const [showCreateNewModal, setShowCreateNewModal] = useState(false);
    const {setToastData} = useToast();
    const [newPlaylistName, setNewPlaylistName] = useState("");
    const {showPlaylistModal, setShowPlaylistModal, serviceListDispatch, allPlaylistArray, clickedPlaylistVideo} = useServiceData();

    const closeMainModal = () => {
        setShowPlaylistModal(false);
        setNewPlaylistName(false);
    }

    return(
        <div className={`playlist-modal-div ${showPlaylistModal ? "flex-row" : "display-none"}`}>
            <div className={`playlist-modal-item ${showCreateNewModal ? "display-none": ""}`}>
                <div className="flex-row align-center justify-between playlist-modal-head">
                    <p className="xsm-heading noto-fonts">Add to Playlist</p>
                    <Button 
                        className={"btn-border-none bg-transparent playlist-modal-close"} 
                        icon={<VscClose className="icon-vr-align mt-4-px"/>}
                        onClick={() => closeMainModal()} 
                    />
                </div>

                {   
                    allPlaylistArray
                    &&
                    allPlaylistArray.map((playlist) => {
                        const isChecked = playlist?.videos?.some(video => video._id === clickedPlaylistVideo._id)
                        return (
                            <div key={playlist._id} className="playlist-name-div">
                                <input 
                                    className="label-input"   
                                    id={`${playlist.title}-playlist`}
                                    value={playlist.title} 
                                    type="checkbox" 
                                    checked={isChecked} 
                                    onChange={() => handlePlaylist(playlist._id, clickedPlaylistVideo, serviceListDispatch, isChecked, setToastData)}
                                />
                                
                                <label htmlFor={`${playlist.title}-playlist`} className="playlist-name-div"> {playlist.title}</label>
                            </div>
                        )
                    })
                }

                <div className="flex-row align-center justify-center modal-footer">
                    <Button 
                        className={"create-playlist-btn font-weight-5"}  
                        icon={<AiOutlinePlus className="icon-vr-align create-icon"/>}  
                        text="Create new"
                        onClick={() => setShowCreateNewModal(true)}
                    />
                </div> 
            </div>
            <div className={`playlist-modal-item ${showCreateNewModal ? "flex-column": "display-none"}`}>
                <div className="flex-row align-center justify-between playlist-modal-head">
                    <p className="xsm-heading noto-fonts">Create New Playlist</p>
                    <Button 
                        className={"btn-border-none bg-transparent playlist-modal-close"} 
                        icon={<VscClose className="icon-vr-align mt-4-px"/>}
                        onClick={() => {
                            setShowPlaylistModal(false)
                        }} 
                    />
                </div>
                <div className="playlist-name-div">
                    <input 
                        className="btn-border-none new-playlist-input" 
                        type="text" 
                        value={newPlaylistName}
                        onChange={(e) => setNewPlaylistName(e.target.value)}
                        />
                </div>
                <div className="modal-footer flex-row align-center justify-flex-end gap-1">
                    <Button 
                        className={"new-playlist-btn font-weight-5"} 
                        text="Cancel"
                        onClick={() => setShowCreateNewModal(false)}
                    />
                    <Button 
                        className={"new-playlist-btn font-weight-5"} 
                        text="Save" 
                        onClick={() => newPlaylistHandler(newPlaylistName, serviceListDispatch, allPlaylistArray, setShowCreateNewModal, setNewPlaylistName, setToastData)}
                    />
                </div>
            </div>
        </div>
    )
}