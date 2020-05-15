import React, { Component, Fragment } from "react";
import Deck from "./components/Deck";
import Table from "./components/Table";
import firebase from "firebase";
import fire from "./fire";

// let firebaseConfig = {
//   // Your web app's Firebase configuration
//     apiKey: "AIzaSyBLo8Qodatxni6vT2np4XGvNVgz1-XTHMY",
//     authDomain: "moviem8s.firebaseapp.com",
//     databaseURL: "https://moviem8s.firebaseio.com",
//     projectId: "moviem8s",
//     storageBucket: "moviem8s.appspot.com",
//     messagingSenderId: "223030327474",
//     appId: "1:223030327474:web:8f756c893c3cd008f6f1ab"
//   };

// firebase.initializeApp(firebaseConfig);
//let dbFavMovies = firebase.firestore();
function App() {
  // let database = firebase.firestore();
  // // let dbFavMovies = firebase.firestore();

  // let yourFavoriteMovie = prompt("Enter your favorite movie?")
  // let movieRating = prompt("Who is the movie rating?")
  // let releaseYear = prompt("What is release year?")
  
  // database
  //   .collection("RealTable")
  //   .add({
  //     Name: yourFavoriteMovie,
  //     ImageLink: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  //     Year: releaseYear,
  //     Rating: movieRating,
  //     Plot:"This is a test"
  //   })
  //   .then(function (docRef) {
  //     console.log("Documentwritten with ID: ", docRef.id);
  //   })
  //   .catch(function (error) {
  //     console.error("Error adding document: ", error);
  //   });

  return (
      <React.Fragment>
      
      <h1>MovieM8S</h1>
      <Deck />
      <Table />
      </React.Fragment>
    
  );
}

export default App;
