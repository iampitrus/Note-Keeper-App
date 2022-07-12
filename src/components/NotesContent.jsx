function NoteContent({ title, note }) {
  const date = new Date();

  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };

  var day = {
    year: date.getFullYear(),
    month: date.getMonth(),
    dday: date.getDate(),
  };

  const { hours, minutes } = time;
  const { year, month, dday } = day;

  return (
    <>
      <div className="space-apart">
        <h3>{title}</h3>
        <em>{`${hours}:${minutes} - ${dday}/${month}/${year}`}</em>
      </div>
      <p>{note}</p>
    </>
  );
}

export default NoteContent;
