import { postVideoToLikedVideo,  postVideoToWatchLater, deleteVideoFromHistory, deleteVideoFromLikedVideo, deleteVideoFromWatchLater, postVideoToHistory} from "../ApiCalls";
import { findItemInArray } from "./commonFunction";

const addToWatchLater = (video, serviceListDispatch, setToastData) => {
    postVideoToWatchLater(video, serviceListDispatch, setToastData);
}

const addToLikedVideos = (video, serviceListDispatch, setToastData) => {
    postVideoToLikedVideo(video, serviceListDispatch, setToastData)
}

const removeFromWatchLater = (id, serviceListDispatch, setToastData) => {
    deleteVideoFromWatchLater(id, serviceListDispatch, setToastData)
}

const removeFromLikedVideo = (id, serviceListDispatch, setToastData) => {
    deleteVideoFromLikedVideo(id, serviceListDispatch, setToastData);
}

const historyHandler = (video, serviceListDispatch, setToastData) => {
    postVideoToHistory(video, serviceListDispatch, setToastData)
}

const calculateView = (views) => {
    return Math.abs(Number(views)) >= 1.0e+9 
    ? (Math.abs(Number(views)) / 1.0e+9).toFixed(1) + "B"
    : Math.abs(Number(views)) >= 1.0e+6
    ?( Math.abs(Number(views)) / 1.0e+6).toFixed(1) + "M"
    : (Math.abs(Number(views))) >= 1.0e+3
    ? (Math.abs(Number(views)) / 1.0e+3).toFixed(1) + "K"
    : Math.abs(Number(views));
}

const watchLaterHandler = (id, video, watchLaterList, serviceListDispatch, setToastData) => {
    findItemInArray(id, watchLaterList) ? removeFromWatchLater(id, serviceListDispatch, setToastData) : addToWatchLater(video, serviceListDispatch, setToastData)
}

const likedVideoHandler = (id, video, likedVideoList, serviceListDispatch, setToastData) => {
    findItemInArray(id, likedVideoList) ? removeFromLikedVideo(id, serviceListDispatch, setToastData) : addToLikedVideos(video, serviceListDispatch, setToastData);
}

const removeVideoFromHistory = (id, serviceListDispatch, setToastData) => {
    deleteVideoFromHistory(id, serviceListDispatch, setToastData);
}


export {watchLaterHandler, likedVideoHandler, removeVideoFromHistory, removeFromLikedVideo, addToLikedVideos, calculateView, historyHandler}