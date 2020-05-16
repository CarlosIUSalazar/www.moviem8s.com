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



import React from "react";
import firebase from "firebase"
import firebaseConfig from '../../fbInitialization'
import { firestore } from "firebase";

export default function FavList(props){
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
  console.log("favMovies state is ", props.favMovies)
  return (
    <table>
      <tbody>
        {
             props.favMovies.map((movie,i) =>(
                <tr key={i}>
                 {
                   //props.favMovies.map((mov,j)=>
                      <div>
                      <td key={i}>{movie.Name}</td>
                      <td key={i}>{movie.Year}</td>
                      <td key={i}>{movie.Rating}</td>
                      {/* <td key={j}>{mov.Plot}</td> */}
                      </div>
                   //)
                 }
                </tr>
             ))
        }
      </tbody>
    </table>
);
};
