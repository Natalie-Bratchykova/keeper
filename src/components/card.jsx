import "../styles/card.css"
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
// create button and functionality for deleting
export const Card = (props) =>{
    return(
        <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__seasons">Seasons: {props.seasons}</p>
            <p className="card__episodes">Episodes: {props.episodes}</p>

            <button className="delete-btn" onClick={(e)=>{
                props.deleteEl(props.id)
            }}> <DeleteIcon/> </button>
        </div>
    )
}