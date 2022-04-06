import { Button } from "../../Components/index";
import { useData, useFilter } from "../../Context";

export const TabButtonChips = () => {
    const {categoryList} = useData();
    const {filterDispatch} = useFilter();
    return (
        <div className="chips-box flex-row justify-evenly">
            {
                categoryList.map(({_id, categoryName}) => (
                    <Button key={_id} className="btn-border-none tab-chips"  text={categoryName} onClick={() => filterDispatch({type: "FILTER_BY_CATEGORY", payload: categoryName})}/>
                ))
            }
        </div>
    )
}