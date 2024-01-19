import { Card } from "./card";
import { notes } from "../notes";
import "../styles/main.css";

function renderCard(card){
return <Card key={card.id} title={card.title} episodes={card.episodes} seasons={card.seasons}/>
}

export const Main = (props) => {
  return (
    <main>
      <div className="container">
      <section className="cards__section">
      {notes.map(renderCard)}
      </section>
       
      </div>
    </main>
  );
};
