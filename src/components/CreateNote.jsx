import React, { useState } from "react";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";

function CreateNote({ onAdd }) {
  const [inputs, setInputs] = useState({ title: "", note: "" });
  function handleChange(e) {
    const { name, value } = e.target;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const customAnimate = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.form
      variants={customAnimate}
      initial="hidden"
      animate="visible"
      action="/"
      className="create-note"
    >
      <input
        autoFocus
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Title"
        value={inputs.title}
      />
      <textarea
        onChange={handleChange}
        name="note"
        rows="5"
        placeholder="Your Note"
        value={inputs.note}
      ></textarea>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 0.2, duration: 0.5 } }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          setInputs({ title: "", note: "" });
          e.preventDefault();
          onAdd(inputs);
        }}
      >
        <AddIcon />
      </motion.button>
    </motion.form>
  );
}

export default CreateNote;
