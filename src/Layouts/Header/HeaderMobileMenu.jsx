import React from 'react';
import { Badge, Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from "@mui/icons-material/Mail";
import {Link as RouterLink} from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {observer} from "mobx-react-lite";
import {useInstance} from "react-ioc";
import NavStore from "../../stores/nav.store"
import authStore from "../../stores/auth.store"



export const HeaderMobileMenu = observer(() => {
  const nav = useInstance(NavStore)


  const handleMenuClose = () => {
    nav.setMobileMenuOpen(false)
  };

  const logoutHandler = event => {
    event.preventDefault()
    nav.setMobileMenuOpen(false)
    authStore.setIsNavigateHome(true)
    authStore.logout()
  }

  // const handleChatOpen = () => {
  //   storeChat.setOpenChatModal(true)
  // };
  //
  // const handleSmsClick = () => {
  //   smsTimerSendStore.setOpenModal(true)
  //   handleMenuClose()
  // }

  return (
    <Menu
      anchorEl={nav.mobileMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={nav.mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={nav.isMobileMenuOpen}
      onClose={handleMenuClose}
    >


      <MenuItem key={4} onClick={handleMenuClose} component={RouterLink} to="/profile">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle/>
        </IconButton>
        <Typography>Мой профиль</Typography>
      </MenuItem>
      <Divider/>
      <MenuItem key={5} onClick={logoutHandler}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon/>
        </IconButton>
        <Typography>Выйти</Typography>
      </MenuItem>
    </Menu>
  );
});
