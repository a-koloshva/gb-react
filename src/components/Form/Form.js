import React, { useState } from "react";
import "./Form.css";

function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValue("");
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}

export default Form;
