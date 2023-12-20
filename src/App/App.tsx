import './style.scss'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather'
import Forecast from '../components/Forecast/Forecast'
import Details from '../components/Details/Details'
import SunMovement from '../components/SunMovement/SunMovement'
import Map from '../components/Map/Map'

export default function App() {
    return (
        <>
            <div className="container">
                <Header></Header>
                <div className="bottom">
                    <Navbar></Navbar>
                    <div className="content">
                        <div className="content__inner">
                            <div className="content__current-weather">
                                <CurrentWeather></CurrentWeather>
                            </div>
                            <div className="content__foreacts">
                                <Forecast></Forecast>
                            </div>
                            <div className="content__details">
                                <Details></Details>
                            </div>
                            <div className="content__sun-movement">
                                <SunMovement></SunMovement>
                            </div>
                            <div className="content__map">
                                <Map></Map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
