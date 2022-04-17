import {createContext, useReducer, useContext, useEffect, useState} from "react";
import { getDataFromWatchLater, getDataFromLikedVideo, getDataFromHistory, getAllPlaylistArray } from "../ApiCalls";
import { findItemInArray } from "../Helper";

const ServiceDataListContext = createContext(); 

const ServiceDataListProvider = ({children}) => {
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);
    const [clickedPlaylistVideo, setClickedPlaylistVideo] = useState({});

    const serviceListReducer = (state, action) => {
        switch(action.type) {
            case "SET_WATCHLATER_LIST":
                return {
                    ...state,
                    watchLaterList: action.payload
                }
            
            case "SET_LIKED_VIDEO_LIST":
                return {
                    ...state,
                    likedVideoList: action.payload
                }

            case "SET_HISTORY_VIDEO_LIST":
                return {
                    ...state,
                    historyVideoList: action.payload
                }

            case "SET_ALL_PLAYLIST_ARRAY":
                return {
                    ...state,
                    allPlaylistArray : action.payload                    
                }

            case "SET_VIDEO_IN_PLAYLIST":
                return {
                    ...state,
                    allPlaylistArray: state.allPlaylistArray.map(playlist => playlist._id === action.payload._id ? action.payload : playlist)
                }
        } 
    }

    useEffect(() => {
        getDataFromWatchLater(dispatch);
        getDataFromLikedVideo(dispatch);
        getDataFromHistory(dispatch)
        getAllPlaylistArray(dispatch);
    }, [])

    const [state, dispatch] = useReducer(serviceListReducer, {watchLaterList: [], likedVideoList: [], historyVideoList: [], allPlaylistArray: []})
    

    return (
        <ServiceDataListContext.Provider value={{
            showPlaylistModal,
            setShowPlaylistModal,
            watchLaterList: state.watchLaterList,
            likedVideoList: state.likedVideoList, 
            historyVideoList: state.historyVideoList,
            allPlaylistArray: state.allPlaylistArray,
            serviceListDispatch: dispatch,
            clickedPlaylistVideo,
            setClickedPlaylistVideo 
            }}>
            {children}
        </ServiceDataListContext.Provider>
    )
}

const useServiceData = () => useContext(ServiceDataListContext);

export {useServiceData, ServiceDataListProvider}