import { useState } from "react";

function SearchBox({ doSearch }){
    const [searchStr, setSearchStr] = useState("");
    return(
        <div class="bg-white shadow-md rounded py-2 px-3" style={{width: "600px", justifySelf: 'center', textAlign: "left"}}>
            <div className="search-form">
                <label>Search Recipes
                <input 
                    className="search-input" 
                    name="search-input" 
                    type="text" 
                    onKeyUp={ doSearch }
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
            </div>
        </div>
    )
}
export default SearchBox;
