import { createContext, useContext, useState} from "react";
import { useAuth } from "./auth.context";

const ToastContext = createContext();

const ToastProvider = ({children}) => {
    const {isUserLoggedIn} = useAuth();
    const [toastData, setToastData] = useState({
        toastText:"",
        toastDisplay: false,
        toastType: ""
    });
    
    return (
        <ToastContext.Provider value={{toastData, setToastData}}>
            {children}
        </ToastContext.Provider>
    )
}

const useToast = () => useContext(ToastContext);

export {useToast, ToastProvider};