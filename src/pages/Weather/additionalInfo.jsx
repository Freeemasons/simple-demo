import React from 'react';
import { observer } from "mobx-react-lite"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TelegramIcon from '@mui/icons-material/Telegram';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SpeedIcon from '@mui/icons-material/Speed';

const AdditionalInfo = (observer((props) => {

  const {data} = props

  return (
    <>
      <Accordion
        disableGutters
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            Additional info
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
            <Typography>{data && Math.round(data?.main?.feels_like - 273)} &#176;C</Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2,
            mb: "10px"
          }}>
            <TelegramIcon />
            <Typography variant={"subtitle1"}>Wind</Typography>
            <Typography>{data && data?.wind.speed} m/s</Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2,
            mb: "10px"
          }}>
            <WaterDropIcon />
            <Typography variant={"subtitle1"}>Hum</Typography>
            <Typography>{data && data?.main.humidity} %</Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2,
            mb: "10px"
          }}>
            <ThunderstormIcon />
            <Typography variant={"subtitle1"}>Rain</Typography>
            <Typography>{data && data?.weather[0].description}</Typography>
          </Box>

          <Box sx={{
            display: "flex",
            gap: 2
          }}>

            <SpeedIcon />
            <Typography variant={"subtitle1"}>Pressure</Typography>
            <Typography>{data && data?.main.pressure}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )

}));

export default AdditionalInfo;