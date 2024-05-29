import React from 'react';
import { Outlet } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Grid, Paper, Toolbar } from "@mui/material";
import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { provider, useInstance } from "react-ioc";
import { observer } from "mobx-react-lite";
import NavStore from "../stores/nav.store";
import { styled } from "@mui/material/styles";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import CounterStore from "../stores/store-counter"
import WeatherStore from "../stores/weather.store"


const ItemText = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


export const AuthLayout = provider(
  CounterStore, NavStore, WeatherStore
)(observer(() => {

  const nav = useInstance(NavStore)

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box sx={{display: 'flex', minHeight: {xs: 'calc(100vh - 64px)', md: 'calc(100vh - 60px)'}}}>
        <Header />
        <SideBar />

        <Box component="main" sx={{p: {sm: 0, md: 3}, width: {xs: "100vw", md: `calc(100vw - ${nav.drawerWidth}px)`}}}>
          <Toolbar />
          <Grid container sx={{minHeight: '100%'}}>
            <Grid item xs={12}>
              <ItemText sx={{p: nav.paperPadding, minHeight: '100%', overflowX: 'auto'}}>
                <Outlet />
              </ItemText>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}));

