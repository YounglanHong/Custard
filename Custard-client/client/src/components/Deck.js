import React from "react";
import Card from "./Card";

function Deck({ match }) {
  //console.log(match.params.category);
  //console.log(match.params.title);
  //console.log(props);
  return (
    <div>
      <div>{match.params.title}</div>
      <Card />
    </div>
  );
}
export default Deck;
