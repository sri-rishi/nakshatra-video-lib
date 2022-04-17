import { postPlaylist, deletePlaylistFromPlaylists, postVideoInPlaylist, deleteVideoFromPlaylist } from "../ApiCalls";
import { findItemInArray } from "./commonFunction";

const newPlaylistHandler = (newPlaylistName, serviceListDispatch, allPlaylistArray, setShowCreateNewModal, setNewPlaylistName) => {
    const title = allPlaylistArray && allPlaylistArray.some(playlistObj => playlistObj.title === newPlaylistName)
    setShowCreateNewModal(false)
    if(!title) {
        postPlaylist(newPlaylistName, serviceListDispatch);
    }else {
        alert("Playlist Name has been taken")
    }
    setNewPlaylistName("");
}

const removePlaylistHandler = (playlistId, serviceListDispatch) => {
    deletePlaylistFromPlaylists(playlistId, serviceListDispatch);
}

const handlePlaylist = (playlistId, clickedPlaylistVideo, serviceListDispatch, isChecked) => {
    return !isChecked ? 
        postVideoInPlaylist(playlistId, clickedPlaylistVideo, serviceListDispatch)
        : 
        deleteVideoFromPlaylist(playlistId, clickedPlaylistVideo._id, serviceListDispatch)  
}

const playlistModalHandler = (video, setShowPlaylistModal, setClickedPlaylistVideo) => {
    setShowPlaylistModal(true);
    setClickedPlaylistVideo(video);
}


export {newPlaylistHandler, removePlaylistHandler, handlePlaylist, playlistModalHandler};