import {createContext, useReducer, useContext, useEffect} from "react";
import { getDataFromWatchLater, getDataFromLikedVideo } from "../ApiCalls";

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
        } 
    }

    useEffect(() => {
        getDataFromWatchLater(dispatch);
        getDataFromLikedVideo(dispatch)
    }, [])

    const [state, dispatch] = useReducer(serviceListReducer, {watchLaterList: [], likedVideoList: [] })

    return (
        <ServiceDataListContext.Provider value={{
            watchLaterList: state.watchLaterList,
            likedVideoList: state.likedVideoList, 
            serviceListDispatch: dispatch, 
            }}>
            {children}
        </ServiceDataListContext.Provider>
    )
}

const useServiceData = () => useContext(ServiceDataListContext);

export {useServiceData, ServiceDataListProvider}