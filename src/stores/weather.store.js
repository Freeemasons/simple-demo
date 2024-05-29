import { makeAutoObservable, toJS } from "mobx";
// import moment from "moment"


class WeatherStore{


  state = {

    currentCity: "Moscow",
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
    console.log("dataWeather", toJS(this.state.dataWeather))
  }

  dataWeather(){

    return this.state.dataWeather
  }

  // key(){
  //
  //   return this.state.key
  // }

  // getWeather() {
  //
  //   return new Promise((resolve, reject) => {
  //       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}&appid=f7926112ea8a257c4d52a68840b2a89a`)
  //         .then(response => {
  //
  //           console.log("response", response)
  //           if (response.ok) {
  //             return response.json();
  //           } else {
  //             throw new Error('Network response was not ok');
  //           }
  //         })
  //         .then(data => {
  //           this.setDataWeather(data); // Установить состояние с полученными данными
  //           resolve(data); // Разрешить Promise с данными
  //         })
  //         .catch(error => {
  //           alert(`Ошибка! ${error}`)
  //           reject(error); // Отклонить Promise в случае ошибки
  //         });
  //     }
  //   )
  // }


  setTimeStampCount(timestamp){

    const sunriseTime = new Date(timestamp * 1000);
    const hours = sunriseTime.getHours().toString().padStart(2, '0');
    const minutes = sunriseTime.getMinutes().toString().padStart(2, '0');
    const seconds = sunriseTime.getSeconds().toString().padStart(2, '0');

    this.state.currentTime = `${hours}:${minutes}`
  }


}

export default WeatherStore