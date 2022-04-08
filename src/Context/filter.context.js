import { createContext, useContext, useReducer } from "react";
import { useData } from "./data.context";
import { getFilteredBySearchData, getFilteredData} from "../Helper";
import { filterDataReducer } from "../Reducer/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({children}) => {
    const {videosList} = useData();

    const [state, dispatch] = useReducer(filterDataReducer, {categoryValue: null, searchValue: ""});


    const filteredBySearchData  = getFilteredBySearchData(videosList, state.searchValue);
    
    const filteredVideoList = getFilteredData(filteredBySearchData, state.categoryValue);

    return (
        <FilterContext.Provider value={{filteredVideoList, filterDispatch: dispatch, categoryValue: state.categoryValue}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export {useFilter, FilterProvider};