import {createContext, useReducer, useContext, useEffect} from "react";
import { getDataFromWatchLater, getDataFromLikedVideo, getDataFromHistory } from "../ApiCalls";

const ServiceDataListContext = createContext(); 

const ServiceDataListProvider = ({children}) => {
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
        } 
    }

    useEffect(() => {
        getDataFromWatchLater(dispatch);
        getDataFromLikedVideo(dispatch);
        getDataFromHistory(dispatch)
    }, [])

    const [state, dispatch] = useReducer(serviceListReducer, {watchLaterList: [], likedVideoList: [], historyVideoList: [] })

    return (
        <ServiceDataListContext.Provider value={{
            watchLaterList: state.watchLaterList,
            likedVideoList: state.likedVideoList, 
            historyVideoList: state.historyVideoList,
            serviceListDispatch: dispatch, 
            }}>
            {children}
        </ServiceDataListContext.Provider>
    )
}

const useServiceData = () => useContext(ServiceDataListContext);

export {useServiceData, ServiceDataListProvider}