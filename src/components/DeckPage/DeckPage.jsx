import React from "react";
import "../../styles/Deck.css";
import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";
import "./DeckPage.css";
import "../../styles/AppLogo.css"


export default function DeckPage({db, fetchData}){
  
  return (
  <>
 
    <div class="deckContainer">
      {console.log("props passed to deckpage", db)}
 
      <Link to={"/favorite-movies"}>
      <div className="fullLogoImageContainer">
    <img className="fullLogoImage" src="https://nes-box-art-library.s3-ap-northeast-1.amazonaws.com/MovieM8SFullLogo.png" alt="Logoimage" />
    <button className="fav-button">My Favorite Lists</button>
    </div> 
        
      </Link>
      <Deck db={db} fetchData={fetchData}/>
    </div>
    </>
  )
}