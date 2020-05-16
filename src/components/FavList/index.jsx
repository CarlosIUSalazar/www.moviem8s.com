import React from "react";
import firebase from "firebase";
import firebaseConfig from "../../fbInitialization";
import { firestore } from "firebase";

import "../../styles/FavList.css";

export default function FavList(props) {
  //fetchData is used to set the state in App.jsx so that the Table updates live without reloading it. Depending where I tried fetchData the behaviour of the App changed. This seems to be a good place for it.
  props.fetchData();

  console.log("favMovies state is ", props.favMovies);
  return (
    <table className="tableclass">
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
    </table>
  );
}

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
