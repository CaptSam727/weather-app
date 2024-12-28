import { Route, Routes, useNavigate } from 'react-router';
import './App.css';
import HomeCard from './components/HomeCard';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react';

function App() {

  const navigate = useNavigate();
  const [data, setData] = useState({});

  const apikey = process.env.REACT_APP_API_KEY;
  const unit = "metric";


  const fetchData = async (event) => {
    event.preventDefault();
    
    const city = event.target.cityName.value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&unit=${unit}`;
    const response = await fetch(url).catch((error) => console.log(error));
    const data = await response.json();
    setData(data);
    
    navigate('/weather');
  }

  // Format time as (H)H:MM
  function formatTime(unix_timestamp) {
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
  }

  // Convert to Local Date
  function calcTime(offset) {
    var d = new Date();
    var utc = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    var nd = new Date(utc + (3600000 * offset));
    return nd;
  }

  // Formatting Date and Time
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  function formatDate(date) {
    return [
      padTo2Digits(day[date.getDay()]),
      padTo2Digits(date.getDate()),
      padTo2Digits(month[date.getMonth()])
    ].join(' ');
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeCard handleSubmit={fetchData} />} />
        <Route path='/weather' element={<WeatherCard data={data} formatTime={formatTime} calcTime={calcTime} formatDate={formatDate} />} />
      </Routes>
    </div>
  );
}

export default App;
