import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import firebase from "firebase";
import FavList from "../FavList";


export default function Table(props){

return (
      <div>
      <Link to={"/deck"} >
        <button>Go back to decks</button>
      </Link>
      <FavList db={props.db}/>
    </div>
    )
}