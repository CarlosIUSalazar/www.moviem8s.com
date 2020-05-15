//https://codesandbox.io/embed/j0y0vpz59   Example
import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";

import Card from "./Card";
import data from "../data.js";
import randomMovies from "../randomMovies.js";
import "../styles/Deck.css";


///Attempt to generate 5 random cards ///
function shuffleNewMovieDeck() {
let length = randomMovies.length;
let randomMovieIndex = ""
for (let i = 1; i <= 5; i++){
  randomMovieIndex = Math.floor(Math.random() * length)
  data.push(randomMovies[randomMovieIndex])
  
}

}
let count = 0;

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


function Deck() {
  shuffleNewMovieDeck()
  console.log("Current deck of cards is: ", data)
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
        //console.log("x is", x)
        // How much the card tilts, flicking it harder makes it rotate faster
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        // Active cards lift up a bit
        const scale = down ? 1.1 : 1;
        if(x > 0){
          console.log("Swipe right")
        } else if (x<0){
          console.log("swipe left")
        }
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
  ));
}

export default Deck;
