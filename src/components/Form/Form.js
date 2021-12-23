import React, { useState, useEffect, useRef } from "react";
import "./Form.css";

import SendIcon from "@mui/icons-material/Send";
// import Input from "@mui/material/Input";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValue("");
    onSubmit(value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div className="wrapper">
      <List className="dialogsList" style={{ width: "auto" }}>
        <ListItem
          disablePadding
          className="dialogsListItem"
          style={{ border: "1px solid green", margin: "10px" }}
        >
          <ListItemButton style={{ border: "1px solid green", margin: "10px" }}>
            <ListItemText primary="Dialog1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="dialogsListItem">
          <ListItemButton>
            <ListItemText primary="Dialog2" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding className="dialogsListItem">
          <ListItemButton>
            <ListItemText primary="Dialog3" />
          </ListItemButton>
        </ListItem>
      </List>
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
          onClick={handleFocus}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          className="formButton"
        >
          Отправить
        </Button>
      </form>
    </div>
  );
}

export default Form;
