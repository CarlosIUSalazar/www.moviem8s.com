import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import "../styles/Deck.css";
import "../styles/FavoriteTableSyles.css"
let firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyBLo8Qodatxni6vT2np4XGvNVgz1-XTHMY",
  authDomain: "moviem8s.firebaseapp.com",
  databaseURL: "https://moviem8s.firebaseio.com",
  projectId: "moviem8s",
  storageBucket: "moviem8s.appspot.com",
  messagingSenderId: "223030327474",
  appId: "1:223030327474:web:8f756c893c3cd008f6f1ab",
};

//firebase.initializeApp(firebaseConfig);
//let dbFavMovies = firebase.firestore();
let database = firebase.firestore();

function Table({ setView }) {
  const db = firebase.firestore();
  const [favMovies, setFavMovies] = React.useState([]);
  const fetchData = async () => {
    const data = await db.collection("RealTable").orderBy("Name").get();
    setFavMovies(data.docs.map((doc) => doc.data()));
  };

  function deleteMoviesOnTable() {
    db.collection("RealTable")
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });

        setTimeout(() => {
          alert("All movies deleted successfully");
        }, 800);
      });
  }

  function deleteSingleMovie(title) {
    let deleteGame = db.collection("RealTable").where("Name", "==", title);
    deleteGame.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });

      setTimeout(() => {
        alert("Movie deleted successfully");
      }, 500);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => setView("DeckView")}>Back to Deck</button>
      <h1>This is a Table View!!</h1>

      {/* <div className="fullLogoImageContainer">
        <div className="main-logo">
          <img src="/MovieM8SLogo.png" className="mainLogo" />
        </div>
        <div className="main-title">
          <img src="/moviem8s.png" className="fullTitleImage" />
        </div>
        <div>

          <button className="go-back-to-deck">Go back to decks</button>
        </div>
      </div> */}

      <main style={{ overflow: "scroll" }}>
        <div className="favTableContainer" style={{ overflow: "scroll" }}>
          <div className="container-fluid" style={{ overflow: "scroll" }}>
            <table
              style={{ overflow: "scroll" }}
              className="table table-sm table-striped table-dark table-hover"
            >
              <div className="deleteAllMoviesButtonContainer">
                <button
                  className="deleteAllMoviesButton"
                  onClick={() => deleteMoviesOnTable()}
                >
                  Delete All Movies
                </button>
              </div>
              <thead className="thead-dark" className="col-md-4 ml-auto">
                <tr height="20px" className="col-md-4 ml-auto">
                  <th>MOVIE TITLE</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody style={{ overflow: "scroll" }}>
                {favMovies.map((favMovie) => (
                  <tr key={uuidv4()}>
                    <td style={{ overflow: "scroll" }}>
                      {" "}
                      <img src={favMovie.ImageLink} alt={favMovie.id} />{" "}
                      {favMovie.Name} | {favMovie.Year} | {favMovie.Rating}{" "}
                    </td>
                    <td>
                      <button
                        className="deleteSingleMovieButton"
                        onClick={() => deleteSingleMovie(favMovie.Name)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default Table;
