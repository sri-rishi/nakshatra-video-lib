import {createContext, useReducer, useContext} from "react"; 
import { postVideoToWatchLater } from "../ApiCalls";

const ServiceDataListContext = createContext(); 

const ServiceDataListProvider = ({children}) => {
    const serviceListReducer = (state, action) => {
        switch(action.type) {
            case "SET_WATCHLATER_LIST":
                return {
                    ...state,
                    watchLaterList: action.payload
                }
        } 
    }

    const addToWatchLater = (video) => {
        postVideoToWatchLater(video, dispatch);
    }

    const [state, dispatch] = useReducer(serviceListReducer, {watchLaterList: [] })

    return (
        <ServiceDataListContext.Provider value={{watchLaterList: state.watchLaterList, serviceListDispatch: dispatch, addToWatchLater}}>
            {children}
        </ServiceDataListContext.Provider>
    )
}

const useServiceData = () => useContext(ServiceDataListContext);

export {useServiceData, ServiceDataListProvider}