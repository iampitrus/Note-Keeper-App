import React, { useState } from "react";
import { motion } from "framer-motion";

function CreateNote({ onAdd }) {
  const [inputs, setInputs] = useState({ title: "", note: "" });
  function handleChange(e) {
    const { name, value } = e.target;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <motion.div>
      <form action="/" className="create-note">
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
        <button
          onClick={(e) => {
            setInputs({ title: "", note: "" });
            e.preventDefault();
            onAdd(inputs);
          }}
        >
          Add
        </button>
      </form>
    </motion.div>
  );
}

export default CreateNote;
