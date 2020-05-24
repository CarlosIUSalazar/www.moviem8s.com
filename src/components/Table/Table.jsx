import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import firebase from "firebase";
import FavList from "../FavList";
import "../../styles/FavList.css";
import "../Deck/Deck.css";
import {v4 as uuidv4} from "uuid";
import "../../styles/AppLogo.css"

import "./Table.scss";

export default function Table(props){

  const db = firebase.firestore();
  const [favMovies, setFavMovies] = React.useState([])
  const fetchData = async () => {
  const data = await db.collection('RealTable').orderBy('Name').get();
    setFavMovies(data.docs.map((doc) => doc.data()));
  }

  //Function to add a button that deletes all movies from database and table
  function deleteMoviesOnTable(){
  db.collection("RealTable")
  .get()
  .then(res => {
    res.forEach(element => {
      element.ref.delete();
    });
    setTimeout(() => {
      alert("Movies deleted successfully")
          window.location.reload(false);
      }, 400);
  });
  //setTimeout(function(){ window.location.reload(true); }, 1);
  }

  function deleteSingleMovie(title){
  let deleteGame = db.collection('RealTable').where('Name','==',title);
  deleteGame.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
    setTimeout(() => {
  alert("Movie deleted successfully")
      window.location.reload(false);
  }, 400);
  });
  }

  //fetchData is used to set the state in App.jsx so that the Table updates live without reloading it. Depending where I tried fetchData the behaviour of the App changed. This seems to be a good place for it.
  useEffect(() => {
  fetchData();
  }, [])

  return (
    <>
        <div className="fullLogoImageContainer" >
          <div className="main-logo">
            <img src="/MovieM8SLogo.png" className="mainLogo"/>
          </div>
          <div className="main-title">
            <img src="/moviem8s.png" className="fullTitleImage"/>
          </div>
          <Link to={"/deck"} >
            <div>
              <button  className="go-back-to-deck" >Go back to decks</button>
            </div>
          </Link>
        </div>
      <main style={{overflow : "scroll"}}>
        <div className="favTableContainer" >
          <div className="container-fluid" >
            <table className="table table-sm table-striped table-dark table-hover">
              <thead className="thead-dark" className="col-md-4 ml-auto">
                <tr height="20px" className="col-md-4 ml-auto">
                  <th>MOVIE TITLE</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody >
                {favMovies.map((favMovie) => (
                  <tr key={uuidv4()}>
                    <td > <img src={favMovie.ImageLink} alt={favMovie.id}/> {favMovie.Name} | {favMovie.Year} | {favMovie.Rating} </td>
                    <td>
                      <button className="deleteSingleMovieButton" onClick={() => deleteSingleMovie(favMovie.Name)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="deleteAllMoviesButtonContainer">
              <button className="deleteAllMoviesButton" onClick={() => deleteMoviesOnTable()}>Delete All Movies</button>
        </div>
      </main>
    </>
    )
}