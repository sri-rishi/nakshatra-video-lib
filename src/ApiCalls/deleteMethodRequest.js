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


export {deleteVideoFromWatchLater, deleteVideoFromLikedVideo};