import React, { useState, useEffect } from 'react';
import { Typography, IconButton } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useInstance } from "react-ioc";
import Box from "@mui/material/Box";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import AccountCircle from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckIcon from '@mui/icons-material/Check';
import PercentIcon from '@mui/icons-material/Percent';
import PersonIcon from '@mui/icons-material/Person';
import NavStore from "../../stores/nav.store"


export const HeaderTitle = observer(() => {
  const nav = useInstance(NavStore)
  const [copyPatientClicked, setCopyPatientClicked] = useState(false)

  const copyPatientProcess = () => {
    setTimeout(() => {
      setCopyPatientClicked(false)
    }, 5000)
  }

  useEffect(() => {
    if (copyPatientClicked) {
      copyPatientProcess()
    }
  }, [copyPatientClicked])

  const handleClickPatientIconInCard = () => {
    if (nav.copyText) {
      setCopyPatientClicked(true)
      // handleCopyToClipBoard(nav.copyText)
    }
  }

  const setPatientsIcon = () => {
    if (nav.copyText) {
      return (
        <IconButton
          disabled={copyPatientClicked}
          onClick={handleClickPatientIconInCard}
          sx={{
            color: "primary.light3",
            ":hover": { bgcolor: "primary.light3", color: "primary.main" },
            ":active": { bgcolor: "primary.light3", color: "primary.main" }
          }}
        >{copyPatientClicked ?
          <CheckIcon sx={{
            color: "primary.light3"
          }}
          />
          :
          <GroupIcon />
          }
        </IconButton>
      )
    } else return <GroupIcon />

  }

  return (
    <Box sx={{ ml: 0, display: 'flex', alignItems: 'center' }}>
      {nav.selectedIndex === 0 && <EventIcon />}

      {nav.selectedIndex === 1 && setPatientsIcon()} 
      {nav.selectedIndex === 2 && <EventNoteIcon />}
      {nav.selectedIndex === 3 && <PermPhoneMsgIcon/>}
      {nav.selectedIndex === 4 && <PriceCheckIcon />}
      {nav.selectedIndex === 5 && <PercentIcon />}
      {nav.selectedIndex === 6 && <CurrencyRubleIcon />}
      {nav.selectedIndex === 7 && <QueryStatsIcon />}
      {nav.selectedIndex === -1 && <AccountCircle />}
      {nav.selectedIndex === -2 && <SettingsIcon />}
      {nav.selectedIndex === 8 && <PersonIcon />}

      <Typography sx={{ ml: 1, textTransform: 'uppercase', display: { xs: "none", sm: "block" } }} variant="h6" noWrap component="div">
        {nav.headerTitle}
      </Typography>
    </Box>

  );
});
