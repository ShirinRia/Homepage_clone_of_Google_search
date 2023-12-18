import { useEffect } from "react";
import { useState } from "react";

const useGooglesearch = (term) => {
   const [data,setdata]=useState([])
   const key=import.meta.env.VITE_APIKEY
   const searchengine=import.meta.env.VITE_SEARCHENGINEID
   useEffect(()=>{
    fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${searchengine}&q=${term}`)
    .then(res=>res.json())
    .then(data=>setdata(data))
   },[key, searchengine, term])
   return {data}
};

export default useGooglesearch;