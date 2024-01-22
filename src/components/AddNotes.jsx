export const AddNotes = (props) => {
  return (
    <form className="form">
      {/* input for title */}
      <input type="text" placeholder="title" onChange={(e)=>{
        props.handleInput(e)
      }} value={props.titleValue} />
      {/* input for seasons */}
      <input type="text" placeholder="seasons" onChange={(e)=>{
        props.handleInput(e)
      }} value={props.seasonsValue} />
      {/* input for episodes */}
      <input type="text" placeholder="episodes" onChange={(e)=>{
        props.handleInput(e)
      }} value={props.episodesValue} />

      <button onClick={(e)=>{
        props.addNote(e)
      }}> add</button>
    </form>
  );
};
