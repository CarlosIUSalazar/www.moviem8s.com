import React from "react";
import "../Deck/Deck.css";
import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";
import "./DeckPage.scss";
import "../../styles/AppLogo.css"
import {v4 as uuidv4} from "uuid";

export default function DeckPage({db, fetchData}){
  return (
  <>
    <div key={uuidv4()} className="deckContainer">
      {console.log("props passed to deckpage", db)}
      {/* <div> */}
        <div className="main-logo">
          <img src="/MovieM8SLogo.png" className="mainLogo"/>
        </div>
        <div className="main-title">
          <img src="/moviem8s.png" className="fullTitleImage"/>
        </div>
        <Link to={"/favorite-movies"}>
        <div className="fullLogoImageContainer">
            <button className="fav-button">My Favorite Lists</button>
        </div>
        </Link>
      {/* </div> */}
      <div className="deck-card">
        <Deck key={uuidv4()} db={db} fetchData={fetchData}/>
      </div>
    </div>
    </>
  )
}