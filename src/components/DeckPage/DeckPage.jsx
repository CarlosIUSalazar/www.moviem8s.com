import React from "react";

import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";

export default function DeckPage({db}){
  return (
    <div>
      {console.log("props passed to deckpage", db)}
      <Link to={"/favorite-movies"}>
        <button>My Favorite Lists</button>
      </Link>
      <Deck db={db}/>
    </div>
  )
}