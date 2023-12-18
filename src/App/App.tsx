import './style.scss'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'

export default function App() {
    return (
        <>
            <div className="container">
                <Header></Header>
                <div className="bottom">
                    <Navbar></Navbar>
                    <div className="content">
                        <div className="current-weather"></div>
                        <div className="foreacts"></div>
                        <div className="details"></div>
                        <div className="sun-movement"></div>
                        <div className="map"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
