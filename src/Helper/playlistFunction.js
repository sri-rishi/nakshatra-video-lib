import { postPlaylist } from "../ApiCalls";

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


export {newPlaylistHandler};