//https://codesandbox.io/embed/j0y0vpz59   Example
import React, { useState, useContext, useEffect } from "react";
import Card from "../Card/Card";
import {LoginContext} from "../../context/LoginState";
import data from "../../data.js";
import randomMovies from "../../randomMovies.js";

import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import "../../styles/Deck.css";

import {v4 as uuidv4} from "uuid";

///Attempt to generate 5 random cards ///
function shuffleNewMovieDeck() {
let length = randomMovies.length;
let randomMovieIndex = ""
if (data.length > 5){
  data.splice(5)
}

for (let i = 1; i <= 5; i++){
  randomMovieIndex = Math.floor(Math.random() * length)
  data.push(randomMovies[randomMovieIndex])
}

}
let count = 0;
let selectedMovie = "";
let swipeRight = false;
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;


export default function Deck({db}) {
//   useEffect(() => {
//    setTimeout(function(){ window.location.reload(true); }, 1);
//  },[])

  const {loginUser, isUserLoggedIn} = useContext(LoginContext);
  console.log("GOT IT?????", loginUser)
  console.log("HOW ABOUT THIS?????", isUserLoggedIn)

  shuffleNewMovieDeck()
  if (data.length > 5){
    data.splice(5)
  }
  count = 0;
  if (data.length > 5){
    setTimeout(function(){ window.location.reload(true); }, 0);
  }
  console.log("Current deck of cards is: ", data)
  console.log("Count", count)
  console.log("all cards gone now!")
  // The set flags all the cards that are flicked out
  const [gone] = useState(() => new Set());

// Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const [props, set] = useSprings(data.length, i => ({
    ...to(i),
    from: from(i)
  }));
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      // If you flick hard enough it should trigger the card to fly out
      const trigger = velocity > 0.2;
      // Direction should either point left or right
      const dir = xDir < 0 ? -1 : 1;
      // If button/finger's up and trigger velocity is reached, we flag the card
      if (!down && trigger) {
        gone.add(index);
        if (count === 0) {
          selectedMovie = data[4]
          console.log("Selected Movie was ", data[4])
        }
        if (count === 1) {
          selectedMovie = data[3]
          console.log("Selected Movie was ", data[3])
        }
        if (count === 2) {
          selectedMovie = data[2]
          console.log("Selected Movie was ", data[2])
        }
        if (count === 3) {
          selectedMovie = data[1]
          console.log("Selected Movie was ", data[1])
        }
        if (count === 4) {
          selectedMovie = data[0]
          console.log("Selected Movie was ", data[0])
        }
        count++
        console.log("Count", count)
        if (count === 5){
          setTimeout(function(){ window.location.reload(true); }, 500);
        }
      }
      set(i => {
        // We're only interested in changing spring-data for the currentspring
        if (index !== i) return;
        const isGone = gone.has(index);
        // When a card is gone it flys out left or right, otherwise goes back to zero
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
        console.log("isGone is", isGone)
        // How much the card tilts, flicking it harder makes it rotate faster
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        // Active cards lift up a bit
        const scale = down ? 1.1 : 1;
        if(x > 0){
          console.log("Swipe right")
          swipeRight = true;
        } else if (x<0){
          console.log("swipe left")
          swipeRight = false;
        }
        //Save to Database When Swipe Right
        console.log("Final value of swipeRight = ", swipeRight)
        console.log("SelectedMovieName", selectedMovie.name)
        
        if (isGone === true && swipeRight === true){
        db
        .collection("RealTable")
        .add({
          UserID: loginUser.userID,
          UserFirstName: loginUser.userFirstName,
          UserLastName: loginUser.userLastName,
          UserEmail: loginUser.userEmail,
          Name: selectedMovie.name,
          ImageLink: selectedMovie.pics[0],
          Year: selectedMovie.year,
          Rating: selectedMovie.rating,
          Plot: selectedMovie.plot,
          id: uuidv4()
        })
        .then(function (docRef) {
          console.log("Documentwritten with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });

      }
      
              //// THIS SENDS BACK THE ADDED CARD TO THE STATE ALL THE WAY BACK IN APP.JSX SO IT CAN
        // BE DISPLAYED REAL TIME IN THE TABLE WITHOUT RELOADING.
        //fetchData()
        ///
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === data.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
        console.log("Final value of swipeRight = ", swipeRight)
        console.log("SelectedMovieName", selectedMovie.name)
    }
    
  );
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
        <Card
          i={i}
          x={x}
          y={y}
          rot={rot}
          scale={scale}
          trans={trans}
          data={data}
          bind={bind}
        />
      ))
}