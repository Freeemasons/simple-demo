import React, { useCallback, useEffect } from 'react';
import {
  AppBar,
  Badge,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import NavStore from "../../stores/nav.store";
import { useInstance } from "react-ioc";
import { observer } from "mobx-react-lite";

import { styled } from "@mui/material/styles";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import GroupIcon from "@mui/icons-material/Group"
import PriceCheckIcon from "@mui/icons-material/PriceCheck"
import EventNoteIcon from "@mui/icons-material/EventNote"
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg"
import EventIcon from "@mui/icons-material/Event"
import QueryStatsIcon from "@mui/icons-material/QueryStats"


const MedicalCenterSelect = styled(Select)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    color: 'white',
    borderColor: 'white'
  },
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ADC4F5",
      borderWidth: '2px'
    },
    "&:hover fieldset": {
      borderColor: "#ADC4F5"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ADC4F5"
    }
  }
}));

export const Header = observer(() => {
  const nav = useInstance(NavStore)


  const handleDrawerToggle = () => {
    nav.toggleMobileOpen()
  };

  const handleProfileMenuOpen = (event) => {
    nav.setMenuAnchorEl(event.currentTarget)
    nav.setMenuOpen(true)
  };

  const handleMobileMenuOpen = (event) => {
    nav.setMobileMenuAnchorEl(event.currentTarget);
    nav.setMobileMenuOpen(true)
  };



  const mainTheme = useTheme();
  const mobileBreakpoint = useMediaQuery(mainTheme.breakpoints.down("sm"));

  const showMenuItemIcon = (id) => {
    switch (id) {
      case "/":
        return <EventIcon />;
      case "/price":
        return <CurrencyRubleIcon />;
      case "/patients":
        return <GroupIcon />;
      case "/dept":
        return <PriceCheckIcon />;
      case "/table":
        return <EventNoteIcon />;
      case "/calls":
        return <PermPhoneMsgIcon />;
      case "/statistics":
        return <QueryStatsIcon />;

      default:
        return <EventIcon />;
    }
  }


  return (
    // <>
    //   <AppBar
    //     position="fixed"
    //     sx={{
    //       boxShadow: 3,
    //
    //       width: { md: `calc(100% - ${nav.drawerWidth}px)` },
    //       ml: { md: `${nav.drawerWidth}px` }
    //     }}
    //   >
    //     <Toolbar>
    //       <IconButton
    //         color="inherit"
    //         aria-label="open drawer"
    //         edge="start"
    //         onClick={handleDrawerToggle}
    //         sx={{ mr: 2, display: { md: 'none' } }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //
    //
    //       <HeaderTitle />
    //
    //       <Box sx={{ flexGrow: 1 }} />
    //
    //
    //
    //     </Toolbar>
    //   </AppBar>
    //   {nav.isMenuOpen && <HeaderMenu />}
    //   {nav.isMobileMenuOpen && <HeaderMobileMenu />}
    // </>
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 3,

          width: { md: `calc(100% - ${nav.drawerWidth}px)` },
          ml: { md: `${nav.drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* {mobileBreakpoint && <Box sx={{ mt: "5px" }}>{showMenuItemIcon(nav.currentPathName)}</Box>} */}

          {/* {!mobileBreakpoint && <HeaderTitle />} */}
          <HeaderTitle />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={nav.isMenuOpen ? nav.menuId : undefined}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={nav.isMobileMenuOpen ? nav.mobileMenuId : undefined}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {nav.isMenuOpen && <HeaderMenu />}
      {nav.isMobileMenuOpen && <HeaderMobileMenu />}
    </>
  );
});