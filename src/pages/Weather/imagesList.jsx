import img01d from "../../common/assets/img/weather/01d.png"
import img01n from "../../common/assets/img/weather/01n.png"
import img02d from "../../common/assets/img/weather/02d.png"
import img02n from "../../common/assets/img/weather/02n.png"
import img03d from "../../common/assets/img/weather/03d.png"
import img03n from "../../common/assets/img/weather/03n.png"
import img04n from "../../common/assets/img/weather/04n.png"
import img04d from "../../common/assets/img/weather/04d.png"
import img09d from "../../common/assets/img/weather/09d.png"
import img09n from "../../common/assets/img/weather/09n.png"
import img10d from "../../common/assets/img/weather/10d.png"
import img10n from "../../common/assets/img/weather/10n.png"
import img11d from "../../common/assets/img/weather/11d.png"
import img11n from "../../common/assets/img/weather/11n.png"
import img13d from "../../common/assets/img/weather/13d.png"
import img13n from "../../common/assets/img/weather/13n.png"
import img50d from "../../common/assets/img/weather/50d.png"
import img50n from "../../common/assets/img/weather/50n.png"

const IconWeather = ({ icon =  img01d}) => {

    const imgList = [img01d, img01n, img02d, img02n, img03d, img03n, img04n, img04d, img09d, img09n, img10d, img10n, img11d, img11n, img13d, img13n, img50d, img50n]
    let img = imgList.find(key => key.split('/')[3]?.split('.')[0] === icon)


    return (
      <img src={img} alt='icon' style={{ maxWidth: '100%', height: "auto" }}/>
    )
}

export default IconWeather