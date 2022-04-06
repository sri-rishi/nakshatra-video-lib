import {FaSearch} from "../../assets/icons";
import { useFilter } from "../../Context";
import { Button } from "../index";
import {useState} from "react";


export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState()
    const {filterDispatch} = useFilter();
    return (
        <div className="nav-section search-div md-screen-hidden mr-1">
            <label htmlFor="search-box">
                <input 
                    className="input-search btn-border-none bg-transparent" 
                    id="search-box" 
                    type="text" 
                    placeholder="Search" 
                    aria-label="Search Box" 
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </label>
            <Button 
                className="nav-search-btn btn-border-none bg-transparent" 
                type="submit" 
                icon={<FaSearch className="icon-vr-align"/>}
                onClick={() => filterDispatch({type: "FILTER_BY_SERACH", payload: searchValue})}
            />       
        </div>
    )
}


