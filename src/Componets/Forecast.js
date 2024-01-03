import React, { useEffect, useState } from 'react'
import sun from "../Images/sun.webp";

export default function Forecast() {

var [weather, setWeather]=useState({})

useEffect(()=>{
  async function getData(){
    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Columbus&units=imperial&appid=ca8c2c7970a09dc296d9b3cfc4d06940")
    var data = await response.json()
    console.log(data)
    setWeather(data);
  }
  getData()
},[])
  






  return (
    <div className='main-container'>
      <div className='inner-child'>
        <div className='left-container'>
          <div className='top-left'>
            <h1>{weather.name}</h1>
            <h3>{weather.sys?.country}</h3>
          </div>

          <div className='bottom-left'>
            <div className='clock-left'>
              <h1>12:34:56</h1>
              <p>1 January, 2024</p>
            </div>
            <div className='temp-left'>
              <h1>{Math.round(weather.main?.temp)}°F</h1>
            </div>

          </div>
        </div>
        <div className='right-container'>

          <div className='logo-container'>
            <img src={sun} alt='sun' width={200} />
          </div>

          <h1>{weather.weather?.[0].main}</h1>
          <hr/>

          <div className='middle-right'>
            <input type='text' name='search' placeholder='Search city..' />
          </div>

          <div className='weather-info'>
            <h3>{weather.weather?.[0].description}</h3>
          </div>

          <div className='weather-stats'>
            <div>
              <p>Feels Like</p>
              <p>{Math.round(weather.main?.feels_like)}°F</p>
            </div>

            <div>
              <p>Humidity</p>
              <p>{weather.main?.humidity}%</p>
            </div>

            <div>
              <p>Visibility</p>
              <p>{weather.visibility}</p>
            </div>

            <div>
              <p>Wind Speed</p>
              <p>{Math.round(weather.wind?.speed)} Mph</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
