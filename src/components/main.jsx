import { Card } from "./card";
import { notes } from "../notes";
import React from "react";
import "../styles/main.css";
import { AddNotes } from "./AddNotes";

function renderCard(card, index,  func) {
  return (
    <Card
      key={card.id}
      id={index}
      title={card.title}
      episodes={card.episodes}
      seasons={card.seasons}
      deleteEl={func}
    />
  );
}

export const Main = (props) => {
  let [currentNotes, setNotes] = React.useState(notes);

  // for adding
  let [inputState, setInputState] = React.useState({
    title: "",
    seasons: "",
    episodes: "",
    isOpened: false
  });

  function handleInputValues(e) {
    const elem = e.target;
    setInputState((prev) => {
      if (elem.placeholder === "title") {
        return {
          title: elem.value,
          seasons: prev.seasons,
          episodes: prev.episodes,
          isOpened:true
        };
      } else if (elem.placeholder === "seasons") {
        return {
          title: prev.title,
          seasons: elem.value,
          episodes: prev.episodes,
          isOpened:prev.isOpened
        };
      } else if (elem.placeholder === "episodes") {
        return {
          title: prev.title,
          seasons: prev.seasons,
          episodes: elem.value,
          isOpened:prev.isOpened
        };
      }
    });
  }

  function addNoteToList(e) {
    e.preventDefault();
    setNotes((prev) => {
      return [...prev, inputState];
    });
    setInputState({title: "", seasons:"", episodes:"", isOpened:false})
  }

  // for notes deletion
  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((el, i) => i !== id);
    });
  }
  return (
    <main>
      <div className="container">
        {/* create form for add notes */}
        <AddNotes
          handleInput={handleInputValues}
          titleValue={inputState.title}
          seasonsValue={inputState.seasons}
          episodesValue={inputState.episodes}
          addNote={addNoteToList}
          isOpened = {inputState.isOpened}
        />
        <section className="cards__section">
          {currentNotes.map((el, i) => renderCard(el,i, deleteNote))}
        </section>
      </div>
    </main>
  );
};
