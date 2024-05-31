import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import { useInstance } from "react-ioc"
import { observer } from "mobx-react-lite";
import CounterStore from "../../stores/store-counter"
import NavStore from "../../stores/nav.store"
import moment from "moment"
// import 'moment/locale/ru'
import WeatherStore from "../../stores/weather.store"
import { FullPageFallbackProgress } from "../../Components/UI/preloaders/FullPageFallbackProgress"
import DescriptionText from "./descriptionText"
import WeatherWidget from "./weatherWidget"


const WeatherPage = (observer(() => {

  const counterStore = useInstance(CounterStore)
  const nav = useInstance(NavStore)
  const weatherStore = useInstance(WeatherStore)


  useEffect(() => {
    document.title = "Weather";
    nav?.setHeaderTitle("Weather");
    nav?.setSelectedIndex(6);
  }, [nav]);

  let key = 'f7926112ea8a257c4d52a68840b2a89a'

  const [data, dataSet] = useState(null)


  const fetchWeather = useCallback(() => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherStore.currentCity}&appid=${key}`)
        .then(response => {

          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          dataSet(data);
          resolve(data);
        })
        .catch(error => {

          alert(`Ошибка! ${error}`)
          // reject(error);
        });
    });
  }, [key]);


  useEffect(() => {

    fetchWeather()
  }, [])

  // useEffect(() => {
  //
  //   weatherStore.getWeather()
  // }, [])



  const calendarTime = moment(new Date()).format('dddd, D MMMM')

  const changeHandler = event => {
    weatherStore.setCurrentCity(event.target.value)
  }

  function timeFormat(timeZone){

    const now = moment.utc();
    const formattedTime = now.add(timeZone, 'seconds').format('HH:mm');
    return formattedTime
  }


  if (!data) {
    return (<FullPageFallbackProgress />)
  }

  return (<>
      {data &&
        <Grid
          container={true}
          spacing={0}
          gap={"20px"}
          sx={{
            mt: "40px",
          }}
        >
          <WeatherWidget
            changeHandler={changeHandler}
            fetchWeather={fetchWeather}
            data={data}
            calendarTime={calendarTime}
            timeFormat={timeFormat}
          />
          <DescriptionText />
        </Grid>
      }
    </>
  )

}));

export default WeatherPage;