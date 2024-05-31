import React, { useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { provider, useInstance } from "react-ioc"
import { toJS } from "mobx"
import { observer } from "mobx-react-lite";
import CounterStore from "../../stores/store-counter"
import NavStore from "../../stores/nav.store"


const Counter = provider(
  CounterStore, NavStore,
)(observer(() => {

  const counterStore = useInstance(CounterStore)
  const nav = useInstance(NavStore)


  useEffect(() => {
    document.title = 'счетчик'
    nav?.setHeaderTitle('счетчик')
    nav?.setSelectedIndex(1)

  }, [])


  return (
    <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          gap={20}
          sx={{
            mt: "40px"
          }}
    >
      <Grid item
      >
        <Paper
          sx={{
            p: "40px"
          }}
        >
          <Box sx={{
            textAlign: "center",
            mb: "20px"
          }}>
            <Typography variant={"subtitle1"}>
              Counter {counterStore.count}
            </Typography>

          </Box>
          <Button
            variant={"outlined"}
            sx={{
              mr: "10px"
            }}
            onClick={() => {
              counterStore.increment()
            }}
          >
            +
          </Button>
          <Button
            variant={"outlined"}
            onClick={() => {
              counterStore.decrement()
            }}
          >
            -
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}));

export default Counter;