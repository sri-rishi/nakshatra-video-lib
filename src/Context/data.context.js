import axios from "axios";
import {createContext, useState, useContext, useEffect} from "react";
const DataContext =  createContext();

const DataProvider = ({children}) => {
    const [videosList, setVideosList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getData(setVideosList);
        getCategoryData(setCategoryList);
    }, []);

    const getCategoryData = async(setCategoryList) => {
        try{
            const response = await axios.get("/api/categories");
            if(response?.data?.categories){
                setCategoryList(response?.data?.categories)
            }
        }catch(error) {
            console.error(error)
        }
    }
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
        <DataContext.Provider value={{videosList, categoryList}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export {useData, DataProvider};