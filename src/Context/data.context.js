import {createContext, useState, useContext, useEffect} from "react";
import { getData, getCategoryData } from "../ApiCalls";

const DataContext =  createContext();

const DataProvider = ({children}) => {
    const [videosList, setVideosList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getData(setVideosList);
        getCategoryData(setCategoryList);
    }, []);

   
    return (
        <DataContext.Provider value={{videosList, categoryList}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {useData, DataProvider};