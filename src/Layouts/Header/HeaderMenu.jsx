import React from 'react';
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { observer } from "mobx-react-lite";
import { useInstance } from "react-ioc";
import NavStore from "../../stores/nav.store"
import authStore from "../../stores/auth.store"


export const HeaderMenu = observer(() => {
  const nav = useInstance(NavStore)

  const handleMenuClose = () => {
    nav.setMenuOpen(false)
  };

  const navigate = useNavigate();


  const logoutHandler = event => {
    event.preventDefault()
    nav.setMenuOpen(false)
    authStore.setIsNavigateHome(true)
    authStore.logout()

    navigate(`/auth`)
  }

  return (
    <Menu
      anchorEl={nav.menuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={nav.menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={nav.isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem key={1} onClick={handleMenuClose}
                component={RouterLink} to="/profile"><IconButton><AccountCircle /></IconButton>My profile</MenuItem>
      <Divider />

      <MenuItem key={3} onClick={logoutHandler}>
        <IconButton><LogoutIcon />
        </IconButton>
        Log out
      </MenuItem>

    </Menu>
  );
});