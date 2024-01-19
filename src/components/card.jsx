import "../styles/card.css"
export const Card = (props) =>{
    return(
        <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__seasons">Seasons: {props.seasons}</p>
            <p className="card__episodes">Episodes: {props.episodes}</p>
        </div>
    )
}