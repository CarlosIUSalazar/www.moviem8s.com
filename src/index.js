import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//import * as firebase from 'firebase';


  // Initialize Firebase
// firebase.initializeApp(config);

// let dbMovieM8s = firebase.firestore();
// dbMovieM8s.collection("favoriteMovies").add({
//     MovieName: "Terminator 2",
//     Genre: "Sci-Fi",
//     Year: 1984
// })
// .then(function(docRef) {
//     console.log("Documentwritten with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

ReactDOM.render(<App />, document.getElementById("root"));
