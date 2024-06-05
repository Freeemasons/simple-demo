import React from 'react';
import { observer } from "mobx-react"
import { useInstance } from "react-ioc"
import TodoStore from "../../../stores/todo.store"
import { Typography } from "@mui/material"



const Stat = (observer(() => {

  const todoStore = useInstance(TodoStore)

  return (
    <Typography>
      Total: {todoStore.count} | Completed: {todoStore.completedCount} | Uncompleted:{" "}
      {todoStore.incompletedCount}
    </Typography>
  );
}));

export default Stat;