import React from "react";

import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";

import "./DeckPage.css";

export default function DeckPage({db}){
  return (
    <div>
      {console.log("props passed to deckpage", db)}
      <Link to={"/favorite-movies"}>
        <button className="fav-button">My Favorite Lists</button>
      </Link>
      <Deck db={db}/>
    </div>
  )
}