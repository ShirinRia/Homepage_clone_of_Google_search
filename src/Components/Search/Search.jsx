import { useContext, useEffect } from "react";
import Logo from "../Shared/Logo";
import SearchBar from "../Shared/SearchBar";
import { Authcontext } from "../../Context";
import useGooglesearch from "../../Hooks/useGooglesearch";

const Search = () => {
    const { searchfield, searcheddata, setsearcheddata, setloading, loading } = useContext(Authcontext);
    console.log(searchfield)
    const { data } = useGooglesearch(searchfield);
    useEffect(() => {
        setsearcheddata(data)
        setloading(false)
    }, [data])

    console.log(searcheddata)
    return (
        <div className="px-8 ">
            <div className="flex gap-4">
                <Logo size={'3xl'} />
                <SearchBar />
                <hr />

            </div>
           <div>
                    <p>
                        About {searcheddata?.searchInformation?.formattedTotalResults} results ({searcheddata?.searchInformation?.formattedSearchTime} seconds)
                    </p>
                    {/* {searcheddata?.items.map((item,idx)=>
                        <div key={idx}>
                        <a  target="_blank" rel="noopener noreferrer">

                            <img src="" alt="" />

                            <h3> vdv</h3>
                            <p>v cfv</p>

                        </a>
                    </div>
                    )} */}
                </div>
            
        </div>

    );
};

export default Search;