import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  } 

 /* return <button>Tickle me!</button>;
 #The update is:  */
 return <button onClick={tickle}>Tickle me!</button>
 /*##or replace everything in second function like so: */
 /*return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;*/
}

export default Tickler;
