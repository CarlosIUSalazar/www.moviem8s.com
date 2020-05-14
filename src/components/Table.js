import React from "react";
import firebase from "firebase";
import $ from "jquery"


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

firebase.initializeApp(firebaseConfig);
let dbFavMovies = firebase.firestore();




function Table(){
//     let table = document.getElementById('table');
// dbFavMovies.collection("myMovies").orderBy('MovieName').onSnapshot((querySnapshot) => {
//     table.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().first}`);
//         table.innerHTML += `
//         <tr>
//         <td>${doc.data().MovieName}</td>
//         <td>${doc.data().Actor}</td>
//         <td>${doc.data().Year}</td>
//         </tr>
//         `
//     });
// });
    return null 
        // <>
        // <p class="leaderBoardTitle">My Fav Movies Database</p>
        // <p><a class="backHomeLink" href="../src/App.js">Back to Home</a></p>
        // <table class="table my-3">
        //     <thead>
        //         <tr class="tableRow">
        //             <th scope="col">Id</th>
        //             <th class="tableHead1" scope="col">Movie Name</th>
        //             <th class="tableHead2" scope="col">Actor</th>
        //             <th class="tableHead3" scope="col">Year</th>
        //         </tr>
        //     </thead>
        //     <tbody id="table">
        //     </tbody>
        // </table>
        // </>
    
}

export default Table;