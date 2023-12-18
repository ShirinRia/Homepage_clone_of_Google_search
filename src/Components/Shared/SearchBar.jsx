import { VscSearch } from "react-icons/vsc";

import { useNavigate } from "react-router-dom";
import useGooglesearch from "../../Hooks/useGooglesearch";
import { useContext } from "react";
import { Authcontext } from "../../Context";


const SearchBar = () => {
    const navigate=useNavigate();
    const {setsearchfield}=useContext(Authcontext);

    
    const search = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const text = form.get('search')
        setsearchfield(text)
        navigate("/search")
        // alert(searchfield)
       
    }
    return (
        <form onSubmit={search}>
            <div className="flex bg-white border-2 border-slate-400 rounded-full items-center py-4 px-10 gap-3 my-10 ">
                <button type="submit" href='/search'><VscSearch className=" text-xl" /></button>
                <input type="text" name="search" placeholder="Search google or type a url" className="text-xl w-full " />
            </div>
        </form>
    );
};

export default SearchBar;