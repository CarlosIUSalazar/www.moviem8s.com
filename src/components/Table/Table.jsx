import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FavList from "../FavList";

// function renderFavMoviesRow(doc){
// let toggle = true;
// function reloadFavTable(){
//   if (toggle) {
//     toggle = false;
//     setTimeout(function(){ window.location.reload(true); }, 1);  
//   }
// }
// }

export default function Table(props){
    // const [myFavMovies, setmyFavMovies] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

//   React.useEffect(() => {
//     setTimeout(function(){ window.location.reload(true); }, 1);
//  },[])
// reloadFavTable();
// toggle = false;



return (
      <div>
      <Link to={"/deck"} >
        <button>Go back to decks</button>
      </Link>
      <FavList db={props.db} favMovies={props.favMovies} fetchData={props.fetchData}/>
    </div>
    )
}