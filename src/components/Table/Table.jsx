import React, {useState, useEffect} from "react";
import firebase from "firebase";

import {Link} from "react-router-dom";

// import fbInitialization from "../../fbInitialization";

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

function Table({db}){
    const [myFavMovies, setmyFavMovies] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // firebase.initializeApp(firebaseConfig);
    // let dbFavMovies = firebase.firestore();

    // useEffect(() => {
    //   const unsubscribe = db.collection('RealTable').orderBy('Name')
    //     .onSnapshot(snapshot => {
    //       console.log(snapshot)
    //       if (snapshot.size) {
    //         // we have something
    //         setmyFavMovies(snapshot)
    //       } else {
    //         // it's empty
    //       }
    //     })
    // return () => {
    //     console.log(myFavMovies);
    //     unsubscribe()
    //   }
    // }, [db])

    useEffect(() => {
      const unsubscribe = db.collection('RealTable').orderBy('Name')
        .get()
        .then((data) => {
          const tmp = [];
          data.forEach((el) => {
            tmp.push(el);
          })
          setmyFavMovies(tmp);
          setIsLoading(false);
        })
    }, [db])


    return (
      <div>
      {console.log(db.collection("RealTable").orderBy('Name'))}
      <table>
      {isLoading ? <div>Loading</div> : myFavMovies.map(movie => {
        return (
          <tr>
          <td>{movie.data().Name}</td>
          <td>{movie.data().ImageLink}</td>
          <td>{movie.data().Rating}</td>
          <td>{movie.data().Year}</td>
          <td>{movie.data().Plot}</td>
        </tr>
        )
      })}
      {/* {db.collection("RealTable").orderBy('Name').onSnapshot((querySnapshot) => {
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
      })} */}
      </table>
      <Link to={"/deck"}>
        <button>Go back to decks</button>
      </Link>
    </div>
    )
}

export default Table;