import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import PropTypes from "prop-types";
// import logo from "../../../../_common/assets/img/yutok-white.svg";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import PercentIcon from '@mui/icons-material/Percent';
import { observer } from "mobx-react-lite";
import { useInstance } from "react-ioc";
import NavStore from "../../stores/nav.store";
import moment from "moment"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import PersonIcon from '@mui/icons-material/Person';

import logo from "../../logo.svg";


export const SideBar = observer((props) => {
  const nav = useInstance(NavStore)
  const {window} = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    nav.toggleMobileOpen();
  };

  const handleListItemClick = () => {
    nav.closeMobileMenu()
  };


  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <Toolbar className="toolbar-logo" sx={{boxShadow: 3}}>
        <Link
          // onClick={handleLogoClick}

              className="Link-app-logo" component={RouterLink} to="/"
              sx={{width: '100%', textAlign: 'center'}}>
          <Box sx={{
            maxHeight: "50px"
          }}>
            <img src={logo} alt="logo" />
          </Box>

        </Link>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button
                  // onClick={handleScheduleClick}
                  selected={nav.selectedIndex === 0} component={RouterLink} to="/counter">
          <ListItemIcon><EventIcon /></ListItemIcon>
          <ListItemText primary='Счетчик' />
        </ListItem>
        <ListItem button onClick={handleListItemClick}
                  selected={nav.selectedIndex === 1} component={RouterLink} to="/todos">
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary='Дела' />
        </ListItem>
        <ListItem button onClick={handleListItemClick}
                  selected={nav.selectedIndex === 2} component={RouterLink} to="/table">
          <ListItemIcon><EventNoteIcon /></ListItemIcon>
          <ListItemText primary='Погода (в разработке)' />
        </ListItem>
        {/*<ListItem button onClick={handleListItemClick}*/}
        {/*          selected={nav.selectedIndex === 2} component={RouterLink} to="/table">*/}
        {/*  <ListItemIcon><EventNoteIcon /></ListItemIcon>*/}
        {/*  <ListItemText primary='Форма' />*/}
        {/*</ListItem>*/}
        {/*<ListItem button onClick={handleListItemClick}*/}
        {/*          selected={nav.selectedIndex === 3} component={RouterLink} to="/calls">*/}
        {/*  <ListItemIcon><PermPhoneMsgIcon /></ListItemIcon>*/}
        {/*  <ListItemText primary='Магазин' />*/}
        {/*</ListItem>*/}
        {/*<ListItem button onClick={handleListItemClick}*/}
        {/*          selected={nav.selectedIndex === 3} component={RouterLink} to="/calls">*/}
        {/*  <ListItemIcon><PermPhoneMsgIcon /></ListItemIcon>*/}
        {/*  <ListItemText primary='Прайс' />*/}
        {/*</ListItem>*/}
        {/*<ListItem button onClick={handleListItemClick}*/}
        {/*          selected={nav.selectedIndex === 3} component={RouterLink} to="/calls">*/}
        {/*  <ListItemIcon><PermPhoneMsgIcon /></ListItemIcon>*/}
        {/*  <ListItemText primary='Табличка с фильтрами' />*/}
        {/*</ListItem>*/}
      </List>
      <Divider />

      {/*<List>*/}
      {/*  <ListItem button onClick={handleListItemClick}*/}
      {/*            selected={nav.selectedIndex === 4} component={RouterLink} to="/dept">*/}
      {/*    <ListItemIcon><PriceCheckIcon /></ListItemIcon>*/}
      {/*    <ListItemText primary='Баланс' />*/}
      {/*  </ListItem>*/}
      {/*  <ListItem button onClick={handleListItemClick}*/}
      {/*            selected={nav.selectedIndex === 5} component={RouterLink} to="/debt_prepaid">*/}
      {/*    <ListItemIcon><PercentIcon /></ListItemIcon>*/}
      {/*    <ListItemText primary='Долг Аванс' />*/}
      {/*  </ListItem>*/}
      {/*  <ListItem button onClick={handleListItemClick}*/}
      {/*            selected={nav.selectedIndex === 6} component={RouterLink} to="/price">*/}
      {/*    <ListItemIcon><CurrencyRubleIcon /></ListItemIcon>*/}
      {/*    <ListItemText primary='Прайс' />*/}
      {/*  </ListItem>*/}
      {/*</List>*/}

      <Divider />

      {/*<List>*/}
      {/*  <ListItem*/}
      {/*  >*/}
      {/*    <ListItemIcon>*/}
      {/*      <QueryStatsIcon />*/}
      {/*    </ListItemIcon>*/}
      {/*    <ListItemText primary='Статистика' />*/}

      {/*    {*/}
      {/*      open ? <IconButton onClick={handleClick}>*/}
      {/*          <ExpandLess />*/}
      {/*        </IconButton>*/}
      {/*        : <IconButton onClick={handleClick}>*/}
      {/*          <ExpandMore />*/}
      {/*        </IconButton>*/}
      {/*   }*/}


      {/*  </ListItem>*/}
      {/*</List>*/}

      {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
      {/*  <List*/}
      {/*    sx={{*/}
      {/*      p: 0*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <ListItem button*/}
      {/*              sx={{pl: 4, pt: 0, pb: 0, pr: 0}}*/}
      {/*              selected={nav.selectedIndex === 3}*/}
      {/*              component={RouterLink} to="/statistics/patients-statistics"*/}
      {/*    >*/}
      {/*      <ListItemIcon>*/}
      {/*        <PersonIcon />*/}
      {/*      </ListItemIcon>*/}
      {/*      <ListItemText primary="Статистика пациентов" />*/}
      {/*    </ListItem>*/}
      {/*  </List>*/}
      {/*</Collapse>*/}


    </div>
  );

  return (
    <Box component="nav" sx={{width: {md: nav.drawerWidth}, flexShrink: {md: 0}}} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        open={nav.isMobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {xs: 'block', md: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: nav.drawerWidth},
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {xs: 'none', md: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: nav.drawerWidth},
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
});

SideBar.propTypes = {
  window: PropTypes.func,
};