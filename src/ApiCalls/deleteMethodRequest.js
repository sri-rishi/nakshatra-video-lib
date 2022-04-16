import axios from "axios";

const deleteVideoFromWatchLater = async(id, serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/watchlater/${id}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_WATCHLATER_LIST", payload: response.data.watchlater})
        }
    }catch(error) {
        console.error(error)
    }
}

const deleteVideoFromLikedVideo = async(id, serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/likes/${id}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_LIKED_VIDEO_LIST", payload: response.data.likes})
        }
    }catch(error) {
        console.error(error)
    }
}

const deleteVideoFromHistory = async(id, serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/history/${id}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_HISTORY_VIDEO_LIST", payload: response.data.history})
        }
    }catch(error) {
        console.error(error)
    }
}

const deleteAllVideoFromHistory = async(serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete("/api/user/history/all", {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_HISTORY_VIDEO_LIST", payload: response.data.history});
        }
    }catch(error) {
        console.log(error)
    }
}

const deletePlaylistFromPlaylists = async(playlistId, serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try{
        const response = await axios.delete(`/api/user/playlists/${playlistId}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_ALL_PLAYLIST_ARRAY", payload: response.data.playlists})
        }
    }catch(error) {
        console.error(error);
    }
}

const deleteVideoFromPlaylist = async(playlistId, clickedPlaylistVideoId, serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/playlists/${playlistId}/${clickedPlaylistVideoId}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_VIDEO_IN_PLAYLIST", payload: response.data.playlist});
        }
    }catch(error){
        console.error(error)
    }
}

export {deleteVideoFromWatchLater, deleteVideoFromLikedVideo, deleteVideoFromHistory, deleteAllVideoFromHistory, deletePlaylistFromPlaylists, deleteVideoFromPlaylist};