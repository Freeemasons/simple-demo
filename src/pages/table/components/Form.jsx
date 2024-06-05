import React, { useState } from 'react';
import { useInstance } from "react-ioc"
import TodoStore from "../../../stores/todo.store"
import { observer } from "mobx-react"
import Button from "@mui/material/Button"
import { Box, TextField } from "@mui/material"

const Form = (observer((props) => {

  const [text, setText] = useState("");
  const todoStore = useInstance(TodoStore)

  const {date} = props

  const onChangeHandler = (value) => {
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") return;
    todoStore.addTodo(text, date);
    setText("");
  };

  return (

      <Box xs={{
        display: "flex"
      }}>
        <TextField
          fullWidth
          id="TodoTitle"
          label="Todo Title"
          margin="normal"
          name="Todo Title"
          type="text"
          variant="outlined"
          onChange={(event) => onChangeHandler(event.target.value)}
          value={text}
          // onBlur={changeHandler}
          size={'small'}
          focused
        />
        <Button onClick={(e) => handleSubmit(e)} variant={"contained"}>
          add
        </Button>
      </Box>
  );
}))

export default Form;