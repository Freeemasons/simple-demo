import React, { useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { provider, useInstance } from "react-ioc"
import { toJS } from "mobx"
import { observer } from "mobx-react-lite";
import CounterStore from "../../stores/store-counter"
import NavStore from "../../stores/nav.store"

const TodosPage  = provider(
)(observer(() => {

  const counterStore = useInstance(CounterStore)
  const nav = useInstance(NavStore)
  console.log("counterStore", toJS(counterStore))

  useEffect(() => {
    document.title = "todos";
    nav?.setHeaderTitle("todos");
    nav?.setSelectedIndex(6);
  }, [nav]);

  return (
    <Box>
      Раздел в разработке
    </Box>
  );
}));

export default TodosPage;