import { postPlaylist, deletePlaylistFromPlaylists, postVideoInPlaylist, deleteVideoFromPlaylist } from "../ApiCalls";

const newPlaylistHandler = (newPlaylistName, serviceListDispatch, allPlaylistArray, setShowCreateNewModal, setNewPlaylistName) => {
    const title = allPlaylistArray && allPlaylistArray.some(playlistObj => playlistObj.title === newPlaylistName)
    setShowCreateNewModal(false)
    if(!title) {
        postPlaylist(newPlaylistName, serviceListDispatch, setToastData);
    }else {
        alert("Playlist Name has been taken")
    }
    setNewPlaylistName("");
}

const removePlaylistHandler = (playlistId, serviceListDispatch, setToastData) => {
    deletePlaylistFromPlaylists(playlistId, serviceListDispatch, setToastData);
}

const handlePlaylist = (playlistId, clickedPlaylistVideo, serviceListDispatch, isChecked, setToastData) => {
    return !isChecked ? 
        postVideoInPlaylist(playlistId, clickedPlaylistVideo, serviceListDispatch, setToastData)
        : 
        deleteVideoFromPlaylist(playlistId, clickedPlaylistVideo._id, serviceListDispatch, setToastData)  
}

const playlistModalHandler = (video, setShowPlaylistModal, setClickedPlaylistVideo) => {
    setShowPlaylistModal(true);
    setClickedPlaylistVideo(video);
}


export {newPlaylistHandler, removePlaylistHandler, handlePlaylist, playlistModalHandler};