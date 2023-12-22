import { useContext, useEffect } from "react";
import Logo from "../Shared/Logo";
import SearchBar from "../Shared/SearchBar";
import { Authcontext } from "../../Context";
import useGooglesearch from "../../Hooks/useGooglesearch";

const Search = () => {
    const { searchfield, searcheddata, setsearcheddata, setloading, loading } = useContext(Authcontext);
    console.log(searchfield, 'hjij')
    const { data } = useGooglesearch(searchfield);
    console.log(data)
  
        setsearcheddata(data)
        setloading(false)
  

    console.log(searcheddata)
    return (
        <div className="px-8 ">
            <div className="flex gap-4">
                <Logo size={'3xl'} />
                <SearchBar />
                <hr />

            </div>
            <div className="my-8">
                <p>
                    About {searcheddata?.searchInformation?.formattedTotalResults} results ({searcheddata?.searchInformation?.formattedSearchTime} seconds)
                </p>
                {searcheddata?.items?.map((item, idx) =>
                    <div key={idx} className="py-4 px-2">
                        <a href={item?.displayLink} target="_blank" rel="noopener noreferrer">
                            <div className="flex gap-2">
                                <>
                                {
                                    item?.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                        <img src={item.pagemap?.cse_image[0]?.src} alt="" className="h-10" />
                                    )
                                }
                                </>
                                
                                <div>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                                    <h3 className="text-2xl text-sky-600"> {item.title}</h3>
                                    <p>{item.snippet}</p>
                                </div>
                            </div>



                        </a>
                        <hr className="mt-4" />
                    </div>

                )}
            </div>

        </div>

    );
};

export default Search;