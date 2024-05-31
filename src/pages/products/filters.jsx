import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ThermostatIcon from "@mui/icons-material/Thermostat"
import TelegramIcon from "@mui/icons-material/Telegram"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"
import SpeedIcon from "@mui/icons-material/Speed"
import { observer } from "mobx-react-lite"

const Filters = (observer((props) => {


  return (

    <>
      <Accordion
        disableGutters
        // elevation={0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            Filters
          </Typography>


        </AccordionSummary>
        <AccordionDetails>

          <Box sx={{
            display: "flex",
            gap: 2,
            mb: "10px"
          }}>
            <ThermostatIcon />
            <Typography variant={"subtitle1"}>Feels</Typography>
            <Typography> &#176;C</Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2,
            mb: "10px"
          }}>
            <TelegramIcon />
            <Typography variant={"subtitle1"}>Wind</Typography>
            <Typography> m/s</Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2,
            mb: "10px"
          }}>
            <WaterDropIcon />
            <Typography variant={"subtitle1"}>Hum</Typography>
            <Typography> %</Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2,
            mb: "10px"
          }}>
            <ThunderstormIcon />
            <Typography variant={"subtitle1"}>Rain</Typography>
            <Typography></Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2
          }}>

            <SpeedIcon />
            <Typography variant={"subtitle1"}>Pressure</Typography>
            <Typography></Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )

}));

export default Filters;