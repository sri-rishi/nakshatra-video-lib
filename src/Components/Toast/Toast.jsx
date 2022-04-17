import { VscClose } from "../../assets";
import { useToast } from "../../Context";
import { Button } from "../index";

export const Toast = () => {
    const {toastData, setToastData} = useToast();
    const toastCloseHandler = () => {
        setToastData({toastText: "", toastDisplay: false, toastType: "" })
    }
    return (
        <div className={`${!toastData.toastDisplay ? "display-none" : "toast"} ${toastData.toastType}-toast`}>
            <span>{toastData.toastText}</span>
            <Button 
            className="btn-toast btn-border-none bg-transparent" 
            icon={<VscClose className="icon-vr-align"/>} 
            onClick={() => toastCloseHandler()}
            />
                
        </div>
    )
}