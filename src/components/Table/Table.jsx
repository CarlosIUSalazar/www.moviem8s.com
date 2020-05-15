import React, {useState} from "react";
import firebase from "firebase";

import {Link} from "react-router-dom";

let firebaseConfig = {
  // Your web app's Firebase configuration
    apiKey: "AIzaSyBLo8Qodatxni6vT2np4XGvNVgz1-XTHMY",
    authDomain: "moviem8s.firebaseapp.com",
    databaseURL: "https://moviem8s.firebaseio.com",
    projectId: "moviem8s",
    storageBucket: "moviem8s.appspot.com",
    messagingSenderId: "223030327474",
    appId: "1:223030327474:web:8f756c893c3cd008f6f1ab"
  };

function Table(){
    const [myFavMovies, setmyFavMovies] = useState("");

    firebase.initializeApp(firebaseConfig);
    let dbFavMovies = firebase.firestore();

    setmyFavMovies(dbFavMovies);

    return (
      <div>
      <table>
      {dbFavMovies.collection("RealTable").orderBy('Name').onSnapshot((querySnapshot) => {
          querySnapshot.map((doc) => {
            // console.log(`${doc.id} => ${doc.data().first}`);
            return (
              <tr>
                <td>{doc.data().Name}</td>
                <td>{doc.data().ImageLink}</td>
                <td>{doc.data().Rating}</td>
                <td>{doc.data().Year}</td>
                <td>{doc.data().Plot}</td>
              </tr>
            )
          });
      })}
      </table>
      <Link to={"/deck"}>
        <button>Go back to decks</button>
      </Link>
    </div>
    )
}

export default Table;