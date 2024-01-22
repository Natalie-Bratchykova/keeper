export const AddNotes = (props) => {
  return (
    <form className="form">
      {/* input for title */}
      <input type="text" placeholder="title" />
      {/* input for seasons */}
      <input type="text" placeholder="seasons" />
      {/* input for episodes */}
      <input type="text" placeholder="episodes" />

      <button onClick={(e)=>{
        props.addNote()
      }}> add</button>
    </form>
  );
};
