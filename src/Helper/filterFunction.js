const getFilteredBySearchData = (videoList, searchValue) => {
    if(searchValue) {
        return videoList.filter(video => video.title.toLowerCase().includes(searchValue))
    }
    return videoList
}

const getFilteredData = (videoList, categoryValue) => {
    if(categoryValue) {
        return videoList.filter(video => video.categoryName === categoryValue)
    }
    return videoList;
}

export {getFilteredBySearchData, getFilteredData};