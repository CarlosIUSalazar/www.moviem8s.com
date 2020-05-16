import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FavList from "../FavList";

// function renderFavMoviesRow(doc){

// }

export default function Table(props){
    // const [myFavMovies, setmyFavMovies] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

//   React.useEffect(() => {
//     setTimeout(function(){ window.location.reload(true); }, 1);
//  },[])
    
return (
      <div>
      <FavList db={props.db} favMovies={props.favMovies}/>
      <Link to={"/deck"} >
        <button>Go back to decks</button>
      </Link>
    </div>
    )
}