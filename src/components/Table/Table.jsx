import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FavList from "../FavList";

// function renderFavMoviesRow(doc){

// }

export default function Table({db}){
    // const [myFavMovies, setmyFavMovies] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    return (
      <div>
      <FavList db={db}/>
      <Link to={"/deck"}>
        <button>Go back to decks</button>
      </Link>
    </div>
    )
}