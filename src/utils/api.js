import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
//const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmIxMTgzOWRkMjg4OWNhZmFkMzYzMWRhNjQ3NWVhYSIsInN1YiI6IjY1ZDJkZmE0MTY4NGY3MDE4N2QwZDNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ej3K1ciSvny3DHnNwPu21FOpeLDz6cMyqU55e3uwV9E"
const headers={
    Authorization:"Bearer "+TMDB_TOKEN,
};

export const fetchDataFromApi= async(url,params)=>{

    try{
        const {data}=await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err)
        return err;
    }
}