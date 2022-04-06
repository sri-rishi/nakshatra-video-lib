const filterDataReducer =  (state, action) => {
    switch(action.type) {
        case "FILTER_BY_SERACH":
            return{
                ...state, 
                searchValue: action.payload
            }

        case "FILTER_BY_CATEGORY": 
        return {
            ...state, 
            categoryName: action.payload
        }

        default:
            return state;
    }
}


export {filterDataReducer};