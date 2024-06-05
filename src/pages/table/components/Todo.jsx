import React from 'react';
import { observer } from "mobx-react"
import Form from "./Form"
import TodoList from "./TodoList"
import Stat from "./Stat"
import { Box, Typography } from "@mui/material"


const Todo = (observer((props) => {

  const {date} = props


  return (
    <Box>
      <Form date={date} />

      <Typography sx={{
        p: 2,
        fontWeight: "Bold"
      }}>
        All todos Statistics
      </Typography>
      <Stat />
      <TodoList date={date} />
    </Box>
  );
}));

export default Todo;