import React, { useState } from "react";
import { ExpandedNote, CompactedNote } from "./modal/ViewDetailed";
import NoteContent from "./NotesContent";
import Backdrop from "./modal/Backdrop";
import { motion, AnimateSharedLayout } from "framer-motion";

function Notes({ title, note, deleteNote, identity }) {
  const [isNoteExpanded, setIsNoteExpanded] = useState(false);

  function collapseNote() {
    setIsNoteExpanded(false);
  }

  function expandNote() {
    setIsNoteExpanded(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="card-container"
    >
      <AnimateSharedLayout>
        {isNoteExpanded ? (
          <>
            <Backdrop handleClose={collapseNote} />
            <ExpandedNote
              collapse={collapseNote}
              deleteNote={deleteNote}
              identity={identity}
            >
              <NoteContent title={title} note={note} />
            </ExpandedNote>
          </>
        ) : (
          <CompactedNote expand={expandNote}>
            <NoteContent title={title} note={note} />
          </CompactedNote>
        )}
      </AnimateSharedLayout>
    </motion.div>
  );
}

export default Notes;
