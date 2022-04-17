import axios from "axios";

const deleteVideoFromWatchLater = async(id, serviceListDispatch, setToastData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/watchlater/${id}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_WATCHLATER_LIST", payload: response.data.watchlater})
            setToastData({
                toastText:"Successfully removed from Watch later",
                toastDisplay: true,
                toastType: "success"
            })
        }
    }catch(error) {
        setToastData({
            toastText: error,
            toastDisplay: true,
            toastType: "error"
        })
    }
}

const deleteVideoFromLikedVideo = async(id, serviceListDispatch, setToastData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/likes/${id}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_LIKED_VIDEO_LIST", payload: response.data.likes});
            setToastData({
                toastText:"Successfully removed from liked",
                toastDisplay: true,
                toastType: "success"
            })
        }
    }catch(error) {
        setToastData({
            toastText: error,
            toastDisplay: true,
            toastType: "error"
        })
    }
}

const deleteVideoFromHistory = async(id, serviceListDispatch, setToastData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/history/${id}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_HISTORY_VIDEO_LIST", payload: response.data.history})
            setToastData({
                toastText:"Successfully removed from history",
                toastDisplay: true,
                toastType: "success"
            })
        }
    }catch(error) {
        setToastData({
            toastText: error,
            toastDisplay: true,
            toastType: "error"
        })
    }
}

const deleteAllVideoFromHistory = async(serviceListDispatch, setToastData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete("/api/user/history/all", {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_HISTORY_VIDEO_LIST", payload: response.data.history});
            setToastData({
                toastText:"Successfully deleted all history",
                toastDisplay: true,
                toastType: "success"
            })
        }
    }catch(error) {
        setToastData({
            toastText: error,
            toastDisplay: true,
            toastType: "error"
        })
    }
}

const deletePlaylistFromPlaylists = async(playlistId, serviceListDispatch, setToastData) => {
    const token = localStorage.getItem("token");
    try{
        const response = await axios.delete(`/api/user/playlists/${playlistId}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_ALL_PLAYLIST_ARRAY", payload: response.data.playlists})
            setToastData({
                toastText:"Successfully deleted playlist",
                toastDisplay: true,
                toastType: "success"
            })
        }
    }catch(error) {
        setToastData({
            toastText: error,
            toastDisplay: true,
            toastType: "error"
        })
    }
}

const deleteVideoFromPlaylist = async(playlistId, clickedPlaylistVideoId, serviceListDispatch, setToastData) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`/api/user/playlists/${playlistId}/${clickedPlaylistVideoId}`, {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_VIDEO_IN_PLAYLIST", payload: response.data.playlist});
            setToastData({
                toastText:"Successfully deleted video from playlist",
                toastDisplay: true,
                toastType: "success"
            })
        }
    }catch(error){
        setToastData({
            toastText: error,
            toastDisplay: true,
            toastType: "error"
        })
    }
}

export {deleteVideoFromWatchLater, deleteVideoFromLikedVideo, deleteVideoFromHistory, deleteAllVideoFromHistory, deletePlaylistFromPlaylists, deleteVideoFromPlaylist};