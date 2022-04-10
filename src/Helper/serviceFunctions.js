import { postVideoToLikedVideo,  postVideoToWatchLater, deleteVideoFromHistory, deleteVideoFromLikedVideo, deleteVideoFromWatchLater, postVideoToHistory} from "../ApiCalls";
import { findItemInArray } from "./commonFuction";

const addToWatchLater = (video, serviceListDispatch) => {
    postVideoToWatchLater(video, serviceListDispatch);
}

const addToLikedVideos = (video, serviceListDispatch) => {
    postVideoToLikedVideo(video, serviceListDispatch)
}

const removeFromWatchLater = (id, serviceListDispatch) => {
    deleteVideoFromWatchLater(id, serviceListDispatch)
}

const removeFromLikedVideo = (id, serviceListDispatch) => {
    deleteVideoFromLikedVideo(id, serviceListDispatch);
}

const historyHandler = (video, serviceListDispatch) => {
    postVideoToHistory(video, serviceListDispatch)
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

const watchLaterHandler = (id, video, watchLaterList, serviceListDispatch) => {
    findItemInArray(id, watchLaterList) ? removeFromWatchLater(id, serviceListDispatch) : addToWatchLater(video, serviceListDispatch)
}

const likedVideoHandler = (id, video, likedVideoList, serviceListDispatch) => {
    findItemInArray(id, likedVideoList) ? removeFromLikedVideo(id, serviceListDispatch) : addToLikedVideos(video, serviceListDispatch);
}

const removeVideoFromHistory = (id, serviceListDispatch) => {
    deleteVideoFromHistory(id, serviceListDispatch);
}


export {watchLaterHandler, likedVideoHandler, removeVideoFromHistory, removeFromLikedVideo, addToLikedVideos, calculateView, historyHandler}