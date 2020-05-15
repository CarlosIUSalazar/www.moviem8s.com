import React from "react";

import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";

export default function DeckPage(){
  return (
    <div>
      <Link to={"/favorite-movies"}>
        <button>My Favorite Lists</button>
      </Link>
      <Deck/>
    </div>
  )
}