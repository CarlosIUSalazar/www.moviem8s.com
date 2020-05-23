import React from "react";
import firebase from "firebase";
import firebaseConfig from "../../fbInitialization";
import { firestore } from "firebase";
import {v4 as uuidv4} from "uuid";
import "../../styles/FavList.css";

export default function FavList(props) {

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
    let deleteGame = db.collection('RealTable').where('id','==',title);
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
  React.useEffect(() => {
    fetchData();
}, [])
  

  console.log("favMovies state is ", props.favMovies);
  return (
  <div class="favTableContainer">
  <button onClick={deleteMoviesOnTable}>Delete All Movies From List</button>
  {/* {document.getElementById("root").style.overflow = "scroll"}
  {document.getElementById("root").style.position = "relative"}
  {document.getElementById("root").style.padding = "1%"} */}
  <div class="modal-body" data-target=".bd-example-modal-lg">
  <div class="container-fluid">
    <table className="table table-sm table-striped table-dark table-hover">
            <thead className="thead-dark" class="col-md-4 ml-auto">
                <tr height="20px" class="col-md-4 ml-auto">
                    <th>MOVIE TITLE</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {favMovies.map((favMovie) => (
                    <tr height="20px" key={uuidv4()}>
                        <td >{favMovie.Name}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteSingleMovie(favMovie.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
  </div>
  </div>
        <button className="btn btn-danger" onClick={() => deleteMoviesOnTable()}>Delete All Movies</button>
  </div> 
  );
}




{/* <table className="tableclass">
      <tbody className="tablebodyclass">
        <thead>
        <tr>
              <th className="tdtableclass">Name</th>
              <th className="tdtableclass">Year</th>
              <th className="tdtableclass">Rating</th>
            </tr>
        </thead>
        {
        props.favMovies.map((movie, i) => (
              <div>
                <tr className="tabletrclass" key={i} >
                  <td className="tdtableclass" key={i}>
                    {movie.Name}
                  </td>
                  <td className="tdtableclass" key={i}>
                    {movie.Year}
                  </td>
                  <td className="tdtableclass" key={i}>
                    {movie.Rating}
                  </td>
                </tr>
              </div>
        ))}
      </tbody>
    </table> */}








// return (
//   <ul>
//     {props.favMovies.map(movie => (
//       <li key={movie.Name}>{movie.Name + movie.Year}</li>
//     ))}
//   </ul>
// );

// return (
//     <div>
//       {props.items.map !== undefined &&
//         props.items.map(task => {
//           return (
//             <li>
//               <input type="checkbox" />
//               {task}
//             </li>
//           );
//         })}
//     </div>
//   );

// {/* <table>
//       <tbody>
//         <tr>
//         {db.collection("RealTable").orderBy('Name').onSnapshot((querySnapshot) => {
//           querySnapshot.docs.forEach((doc) => {
//               console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//               return (
//                 <>
//                 <td>{doc.data().Name}</td>
//                 <td>{doc.data().ImageLink}</td>
//                 <td>{doc.data().Rating}</td>
//                 <td>{doc.data().Year}</td>
//                 <td>{doc.data().Plot}</td>
//                 </>
//             )
//             })
//           })}
//         </tr>
//     </tbody>
//   </table>
//

//   React.useEffect(() => {
//     setTimeout(function(){ window.location.reload(true); }, 1);
//  },[])
// const [favMovies, setFavMovies] = React.useState([])

// React.useEffect(() => {
//   const fetchData = async () => {
//   db = firebase.firestore();
//   const favMovieData = await db.collection("RealTable").get()
//   setFavMovies(favMovieData.docs.map(doc => doc.favMovieData()))
//   }
//   fetchData()
// },[])
