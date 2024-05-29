import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import IconWeather from "./imagesList"
import AdditionalInfo from "./additionalInfo"

const WeatherWidget = (props) => {

  const {changeHandler, fetchWeather, data, timeStampCount, calendarTime} = props


  return (
    <Grid item xs={12} sm={4} md={4} lg={3}>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: "50px",
            p: "20px"
          }}
        >
          <TextField
            fullWidth
            id="city"
            label="City"
            margin="normal"
            name="city"
            type="text"
            variant="outlined"
            // onChange={changeHandler}
            onBlur={changeHandler}
            size={'small'}
            focused
          >
          </TextField>

          <Button
            fullWidth
            variant={"outlined"}
            onClick={fetchWeather}
          >
            Search
          </Button>
        </Box>


        <Box sx={{
          width: "150px",
          height: "150px",
          margin: "10px 10px 10px 20px"
        }}>
          {data && <IconWeather icon={data?.weather[0].icon} />}
        </Box>

        <Typography variant={"subtitle1"} sx={{
          p: "10px 10px 10px 20px"
        }}>
          {data && data?.name}, {data && data?.sys.country}
        </Typography>

        <Typography variant={"subtitle1"} sx={{
          p: "0px 10px 10px 20px"
        }}>
          {calendarTime}
        </Typography>

        <Typography
          sx={{
            fontSize: "36px",
            p: "0px 10px 10px 20px"
          }}
        >
          {data && Math.round(data?.main?.temp - 273)} <span>&#176;C</span>
        </Typography>
        <AdditionalInfo data={data} />
      </Paper>
    </Grid>
  );
};

export default WeatherWidget;