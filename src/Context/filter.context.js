import { createContext, useContext, useReducer } from "react";
import { useData } from "./data.context";
import { getFilteredBySearchData, getFilteredData} from "../Helper";
import { filterDataReducer } from "../Reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({children}) => {
    const {videosList} = useData();

    const [state, dispatch] = useReducer(filterDataReducer, {categoryName: null, searchValue: ""});


    const filteredBySearchData  = getFilteredBySearchData(videosList, state.searchValue);
    
    const filteredVideoList = getFilteredData(filteredBySearchData, state.categoryName);

    return (
        <FilterContext.Provider value={{filteredVideoList, filterDispatch: dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export {useFilter, FilterProvider};