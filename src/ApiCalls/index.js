import { getData, getCategoryData, getDataFromWatchLater, getDataFromLikedVideo, getVideoById, getDataFromHistory } from "./getMethodRequest";
import {loginHandler, signInHandler, postVideoToWatchLater, postVideoToLikedVideo, postVideoToHistory} from "./postMethodRequest";
import { deleteVideoFromWatchLater, deleteVideoFromLikedVideo } from "./deleteMethodRequest";

export { getData, getCategoryData, loginHandler, signInHandler, postVideoToWatchLater, getDataFromWatchLater, deleteVideoFromWatchLater, postVideoToLikedVideo, deleteVideoFromLikedVideo, getDataFromLikedVideo, getVideoById, postVideoToHistory, getDataFromHistory}