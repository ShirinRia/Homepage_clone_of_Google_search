import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";

const SearchBar = () => {
const search=()=>{

}
    return (
        <form onSubmit={search}>
            <div className="flex bg-white border-2 border-slate-400 rounded-full items-center py-4 px-10 gap-3 my-10 ">
                <button type="submit" href={'/search'}><VscSearch className=" text-xl" /></button>
                <input type="text" placeholder="Search google or type a url" className="text-xl w-full " />
            </div>
        </form>
    );
};

export default SearchBar;