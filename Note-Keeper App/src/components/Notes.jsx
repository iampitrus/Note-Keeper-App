function Notes({ title, note }) {
  return (
    <div className="notes">
      <div className="space-apart">
        <h3>{title}</h3>
        <em>14/7/2022</em>
      </div>
      <p>{note}</p>
    </div>
  );
}
export default Notes;
