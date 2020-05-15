import React, { Component, Fragment } from "react";
import Deck from "./components/Deck";
import Table from "./components/Table";
import firebase from "firebase";
import fire from "./fire";

function App() {
//   let database = firebase.firestore();
//   let dbFavMovies = firebase.firestore();

//   let yourFavoriteMovie = prompt("Enter your favorite movie?")
//   let whoIsTheActor = prompt("Who is the main actor?")
//   let releaseYear = prompt("What is release year?")
  
//   database
//     .collection("myMovies")
//     .add({
//       MovieName: yourFavoriteMovie,
//       Actor: whoIsTheActor,
//       Year: releaseYear,
//     })
//     .then(function (docRef) {
//       console.log("Documentwritten with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });

  return (
      <React.Fragment>
      
      <h1>MovieM8S</h1>
      <Deck />
      <Table />
      </React.Fragment>
    
  );
}

export default App;
