import axios from "axios";
import {createContext, useState, useContext, useEffect} from "react";
const DataContext =  createContext();

const DataProvider = ({children}) => {
    const [videosList, setVideosList] = useState([]);

    useEffect(() => {
        getData(setVideosList);
    }, [])
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
    return (
        <DataContext.Provider value={{videosList}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {useData, DataProvider};