import React, { useState } from "react";
import CreateNote from "./CreateNote";
import { motion } from "framer-motion";
import Notes from "./Notes";

function Title() {
  const [isClicked, setIsClicked] = useState(false);
  const [newNote, setNewNote] = useState([]);

  function addNote(inputed) {
    setNewNote((prevNotes) => {
      return [...prevNotes, inputed];
    });
  }
  return (
    <main>
      <div className="title">
        <div className="title-left">
          <h2>
            <span>Store</span> Your <br /> Thoughts Here...
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="new-close"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {isClicked ? "Done" : "Take Note"}
          </motion.button>
        </div>
        <img src="./mainkeeper.png" alt="think" />
      </div>

      {isClicked && <CreateNote onAdd={addNote} />}
      {newNote[0] !== undefined && <h1>Your Notes</h1>}
      <div className="notes-container">
        {newNote.map(({ title, note }, index) => (
          <Notes title={title} note={note} key={index} />
        ))}
      </div>
    </main>
  );
}

export default Title;
