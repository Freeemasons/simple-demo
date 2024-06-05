import React from "react";
import { observer } from "mobx-react";
import TodoStore from "../../../stores/todo.store"
import { useInstance } from "react-ioc"
import { Box, Typography } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton"
import moment from "moment"



const TodoList = observer(() => {
  const todoStore = useInstance(TodoStore)


  const onClickHandler = (id) => {

    todoStore.toggleComplete(id);
  };

  const onRemoveHandler = (id) => {

    todoStore.remove(id);
  };


  return (
    <Box>
      <Typography sx={{
        p: 2,
        fontWeight: "Bold"
      }}>
        Todos By Day
      </Typography>

      {todoStore && todoStore.todos.map((todo) => {

          return (

            <Box key={todo.id}
                 sx={{
                   display: "flex",
                   alignItems: "center",
                   gap: "20px",
                   flexWrap: "wrap"
                 }}
            >
              <Box sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap"
              }}
              >
                <IconButton onClick={() => onClickHandler(todo.id)}>
                  {todo.completed ? <DoneIcon color={"success"} /> : <PanoramaFishEyeIcon />}
                </IconButton>
                <Typography>
                  {todo.title}
                </Typography>
                <Typography sx={{
                  pl: 1
                }}>
                  ({moment(todo.date).format("DD.MM.YYYY")})
                </Typography>
              </Box>

              <IconButton
                onClick={() => onRemoveHandler(todo.id)}>
                <CloseIcon color={"error"} />
              </IconButton>
            </Box>
          )
        }
      )
      }
    </Box>
  );
});

export default TodoList;