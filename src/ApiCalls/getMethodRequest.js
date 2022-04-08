import axios from "axios";

const getData = async(setVideosList) => {
    try{
        const response = await axios.get("/api/videos");
        if(response?.data?.videos) {
            setVideosList(response?.data?.videos)
        }
    } catch(error){
        console.error(error);
    }
}

const getCategoryData = async(setCategoryList) => {
    try{
        const response = await axios.get("/api/categories");
        if(response?.data?.categories){
            setCategoryList(response?.data?.categories)
        }
    }catch(error) {
        console.error(error)
    }
}

const getDataFromWatchLater = async(serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get("/api/user/watchlater", {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201){
            serviceListDispatch({type: "SET_WATCHLATER_LIST", payload: response.data.watchlater})
        }
    }catch(error) {
        console.error(error)
    }
}

const getDataFromLikedVideo = async(serviceListDispatch) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get("/api/user/likes", {headers: {authorization: token}});
        if(response.status === 200 || response.status === 201) {
            serviceListDispatch({type: "SET_LIKED_VIDEO_LIST", payload: response.data.likes});
        }
    }catch(error) {
        console.error(error)
    }
}

export {getData, getCategoryData, getDataFromWatchLater, getDataFromLikedVideo}