import { Button } from "../../Components/index";
import { useData, useFilter } from "../../Context";

export const TabButtonChips = () => {
    const {categoryList} = useData();
    const {filterDispatch} = useFilter();
    return (
        <div className="chips-box flex-row justify-evenly">
            <Button className="btn-border-none tab-chips all-tab-chip"  text="All" onClick={() => filterDispatch({type: "FILTER_BY_CATEGORY", payload: ""})}/>
            {
                categoryList.map(({_id, categoryName}) => (
                    <Button key={_id} className="btn-border-none tab-chips"  text={categoryName} onClick={() => filterDispatch({type: "FILTER_BY_CATEGORY", payload: categoryName})}/>
                ))
            }
        </div>
    )
}