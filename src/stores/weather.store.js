import { makeAutoObservable, toJS } from "mobx";
// import moment from "moment"


class WeatherStore{


  state = {

    currentCity: "Saint Petersburg",
    errorForm: "",
    currentTime: "",
    dataWeather: undefined,
    key: 'f7926112ea8a257c4d52a68840b2a89a'
  }

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentCity(data){

    this.state.currentCity = data
  }

  get currentCity() {

    return this.state.currentCity
  }

  setDataWeather(data){

    this.state.dataWeather = data
  }

  dataWeather(){

    return this.state.dataWeather
  }


  setTimeStampCount(timestamp){

    const sunriseTime = new Date(timestamp * 1000);
    const hours = sunriseTime.getHours().toString().padStart(2, '0');
    const minutes = sunriseTime.getMinutes().toString().padStart(2, '0');
    const seconds = sunriseTime.getSeconds().toString().padStart(2, '0');

    this.state.currentTime = `${hours}:${minutes}`
  }


}

export default WeatherStore