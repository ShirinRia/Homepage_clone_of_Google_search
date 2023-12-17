import Logo from "../Shared/Logo";
import SearchBar from "../Shared/SearchBar";


const Search = () => {
    return (
        <div className="px-8 ">
            <div className="flex gap-4">
            <Logo size={'3xl'}/>
            <SearchBar />
            </div>
           
        </div>

    );
};

export default Search;