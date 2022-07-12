import { motion } from "framer-motion";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

function ExpandedNote({ children, collapse, deleteNote, identity }) {
  return (
    <motion.div
      animate={{ zIndex: 2 }}
      layoutId="expandable-note"
      onClick={(e) => e.stopPropagation()}
      className="notes expanded"
    >
      {children}
      <button className="exit" onClick={collapse}>
        <CloseIcon />
      </button>
      <button
        className="delete"
        onClick={() => {
          collapse();
          deleteNote(identity);
        }}
      >
        <DeleteIcon />
      </button>
    </motion.div>
  );
}

function CompactedNote({ children, expand }) {
  return (
    <motion.div
      layoutId="expandable-note"
      className="notes compacted"
      onClick={expand}
    >
      {children}
    </motion.div>
  );
}

export { ExpandedNote, CompactedNote };
