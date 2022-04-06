import axios from "axios";

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

export {getData, getCategoryData}