import './style.scss'
import Navbar from '../components/Navbar/Navbar'

function App() {
    return (
        <>
            <div className="container">
                <Navbar></Navbar>
                <div>
                    <div className="locations"></div>
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

export default App
