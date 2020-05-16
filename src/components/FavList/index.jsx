import React from "react";
import firebase from "firebase"
import firebaseConfig from '../../fbInitialization'
import { firestore } from "firebase";

export default function FavList(props){

  // const [favMovies, setFavMovies] = React.useState([])

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //   db = firebase.firestore();
  //   const favMovieData = await db.collection("RealTable").get()
  //   setFavMovies(favMovieData.docs.map(doc => doc.favMovieData()))
  //   }
  //   fetchData()
  // },[])
  console.log("favMovies state is ", props.favMovies)
  return (
    <ul>
      {props.favMovies.map(movie => (
        <li key={movie.Name}>{movie.Name}</li>
      ))}
    </ul>
  );
}



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










{/* <table>
      <tbody>
        <tr>
        {db.collection("RealTable").orderBy('Name').onSnapshot((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
              console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
              return (
                <>
                <td>{doc.data().Name}</td>
                <td>{doc.data().ImageLink}</td>
                <td>{doc.data().Rating}</td>
                <td>{doc.data().Year}</td>
                <td>{doc.data().Plot}</td>
                </>
            )
            })
          })}
        </tr>
    </tbody>
  </table> */}