import "../styles/form.css";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const restOfForm = (props) =>{
return(
    <div className="rest-content">
         <input
        type="text"
        placeholder="seasons"
        onChange={(e) => {
          props.handleInput(e);
        }}
        value={props.seasonsValue}
      />
      {/* input for episodes */}
      <input
        type="text"
        placeholder="episodes"
        onChange={(e) => {
          props.handleInput(e);
        }}
        value={props.episodesValue}
      />

      <div className="open-btn">
      <Zoom in={props.isOpened}>
        <Fab
          className="button"
          onClick={(e) => {
            props.addNote(e);
          }}
        >
          {" "}
          <AddIcon />
        </Fab>
      </Zoom>
      </div>
    </div>
)
}

export const AddNotes = (props) => {



  return (
    <form className="form">
      {/* input for title */}
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          props.handleInput(e);
        }}
        onClick={(e)=>{
            props.handleInput(e)
        }}
        value={props.titleValue}
      />
      {/* input for seasons */}
      {(props.isOpened) ? restOfForm(props): null}
     
    </form>
  );
};
