import React, { useState, useEffect, useRef } from "react";
import "./Form.css";

import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event?.preventDefault && event.preventDefault();

    setValue("");
    onSubmit(value);
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        className="formInput"
      />
      {/* <TextField
        ref={inputRef}
        id="outlined-basic"
        label="Ваше сообщение"
        variant="outlined"
        value={value}
        onChange={handleChange}
        className="formInput"
      /> */}
      <Button
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        className="formButton"
      >
        Отправить
      </Button>
    </form>
  );
}

export default Form;
