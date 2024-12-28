import '../css/WeatherCard.css';
import { Card } from 'react-bootstrap';
import BackgroundVideo from './BackgroundVideo';

export default function WeatherCard({ data, formatTime, calcTime, formatDate }) {
    return (
        <>
            <BackgroundVideo sourceVid={data.weather[0].icon}/>
            <section>
                <div className="mainDiv container-fluid d-flex justify-content-center">
                    <Card className="weather-main-card card mb-4 mt-4 gradient-custom py-3">
                        <Card.Body>
                            <h6 style={{ textAlign: 'center' }}><i className="fa-solid fa-location-dot"></i>
                                {data.name}, {data.sys?.country}
                            </h6>
                            <p id="dateNow" className="text-muted mb-0" style={{ textAlign: 'center' }}>
                                {formatDate(calcTime(data?.timezone / 3600))}
                            </p>
                            <center>
                                <img className="mb-0" id="WeatherImage" src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt="WeatherImage" />
                            </center>
                            <h1 style={{ textAlign: 'center' }}>
                                {Math.round(data.main?.temp - 273.15)} °C
                            </h1>
                            <p className="text-muted mb-0">
                                Feels like {Math.round(data.main?.feels_like - 273.15)}°C
                            </p>
                            <p className="text-muted mb-0">
                                {data?.weather[0]?.description}
                            </p>
                        </Card.Body>

                        <hr />

                        <Card.Body>
                            <div className="row">
                                <div className="col">
                                    <p className="text-muted mb-0">Sunrise: </p>
                                    <p className="text-muted">
                                        {formatTime(data.sys?.sunrise)}
                                    </p>
                                </div>

                                <div className="col">
                                    <p className="text-muted mb-0">Sunset: </p>
                                    <p className="text-muted">
                                        {formatTime(data.sys?.sunset)}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p className="text-muted mb-0">Pressure: </p>
                                    <p className="text-muted">
                                        {data.main?.pressure} mbar
                                    </p>
                                </div>

                                <div className="col">
                                    <p className="text-muted mb-0">Humidity: </p>
                                    <p className="text-muted">
                                        {data.main?.humidity}%
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p className="text-muted mb-0">Wind Speed: </p>
                                    <p className="text-muted">
                                        {data.wind?.speed} m/s
                                    </p>
                                </div>

                                <div className="col">
                                    <p className="text-muted mb-0">Visibility: </p>
                                    <p className="text-muted">
                                        {data.visibility} m
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </>
    );
}