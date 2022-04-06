const getFilteredBySearchData = (videoList, searchValue) => {
    if(searchValue) {
        return videoList.filter(video => video.title.toLowerCase().includes(searchValue))
    }
    return videoList
}

const getFilteredData = (videoList, categoryName) => {
    if(categoryName) {
        return videoList.filter(video => video.categoryName === categoryName)
    }
    return videoList;
}

export {getFilteredBySearchData, getFilteredData};