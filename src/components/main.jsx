import { Card } from "./card";
import { notes } from "../notes";
import React from "react";
import "../styles/main.css";
import { AddNotes } from "./AddNotes";

function renderCard(card, func){
return <Card key={card.id} id={card.id} title={card.title} episodes={card.episodes} seasons={card.seasons} deleteEl={func}/>
}

export const Main = (props) => {

  // f


  // for notes deletion
  let[currentNotes, setNotes] = React.useState(notes)

  function deleteNote(id){
    setNotes(prev =>{
      return prev.filter((el, i) => i !== id)
    })
  }
  return (
    <main>
      <div className="container">
      {/* create form for add notes */}
      <AddNotes/>
      <section className="cards__section">
      {currentNotes.map(el => renderCard(el, deleteNote))}
      </section>
       
      </div>
    </main>
  );
};
