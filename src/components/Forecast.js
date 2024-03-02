import React from "react";
import { ReactComponent as MySVG1 } from '../images/icons/icon-1.svg';
import UmbrellaIcon from '../images/icon-umberella.png';
import WindIcon from '../images/icon-wind.png';
import CompassIcon from '../images/icon-compass.png';
import icon3 from '../images/icons/icon-3.svg';
import icon4 from '../images/icons/icon-5.svg';
import icon5 from '../images/icons/icon-7.svg';
import icon6 from '../images/icons/icon-12.svg';
import icon7 from '../images/icons/icon-13.svg';
import icon8 from '../images/icons/icon-14.svg';


const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const today = new Date();
const hour = today.getHours().toString().padStart(2, '0');
const min = today.getMinutes().toString().padStart(2, '0'); 
const day = today.getDate();
const year = today.getFullYear();
const monthIndex = today.getMonth();
const formattedDate1 = day + " " + monthNames[monthIndex];
const formattedDate2 = day + " " + monthNames[monthIndex] + " " + hour + ":" + min;
const formattedDate3 = year;


        function Forecast() {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=47.0042&longitude=28.8574&current=temperature_2m,wind_direction_10m,wind_speed_10m,relative_humidity_2m&hourly=wind_speed_10m`

            fetch(url).then((data) => {
                    return data.json();
                }).then((info) => {
                    renderWeather(info.current)
                    console.log(info)
                })
        
                function renderWeather(data) {
                    const div = document.createElement('div')
                    div.textContent = `
                    Temperature: ${data.temperature_2m}
                    Wind Speed: ${data.wind_speed_10m}
                    now: ${data.is_day === 0 ? 'night' : 'day'}
                    Humidity: ${data.relative_humidity_2m}
                    `
                    const currTemp = Math.round(data.temperature_2m)
                    const currTempElement = document.getElementById('grade')
                    currTempElement.textContent = currTemp

                    
                    const windSpeed = Math.round(data.wind_speed_10m)
                    const windSpeedElement = document.getElementById('wind-speed')
                    windSpeedElement.textContent = windSpeed + 'km/h'

                    const humidity = data.relative_humidity_2m
                    const humidityElement = document.getElementById('humidity-procent')
                    humidityElement.textContent = humidity + '%'
                    console.log(data.relative_humidity_2m)
        
                    document.body.append(div)
                
        
                function getWindDirections(degrees) {
                    const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West']
                    const index = Math.round((degrees % 360) / 45);
                    return directions[index % 8];
                }
                const windDirectElement = document.getElementById('compass-direction')
                windDirectElement.textContent = getWindDirections(data.wind_direction_10m)
            }

            

        const today_type_day = new Date()
        const currentDayIndex = today_type_day.getDay()
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']

        return (
            <div className='forecast-table'>
            <div className="table">
                <div className="table-wrapper">
                    <div className="today">
                    <div className="today-date">
                        <div className="today">{week[currentDayIndex]}</div>
                        <div className="date">{formattedDate1}</div>
                    </div>
                    <div className="forecast-info">
                        <div className="city">Moldova, Chisinau</div>
                        <div id="number">
                            <div id="grade"></div>
                            <sup id="sup">o</sup>
                            C
                            <MySVG1 id="icon1"/>
                        </div>
                    <div className="day-details">
                        <div id="umbrella-icon">
                            <img src={UmbrellaIcon} alt="umbrella-icon" id="umbrella"/>
                                <div id="humidity-procent"></div>
                        </div>
                        <div id="wind-icon">
                            <img src={WindIcon} alt="wind-icon" id="wind"/>
                            <div id="wind-speed"></div>
                        </div>
                        <div id="compass-icon">
                            <img src={CompassIcon} alt="compass-icon" id="compass"/>
                            <div id="compass-direction"></div>
                        </div>
                    </div>
                    </div>
                </div>
    
            <div className="forecast" style={{backgroundColor: '#262936'}}>
                <div className="day" style={{backgroundColor: '#222530'}}>{week[(currentDayIndex + 1) % 7]}</div>
                <div className="day-card">
                        <div className="forecast-img">
                            <img alt="day-icon" src={icon3} style={{width: '48px'}}></img>
                        </div>
                        <div id="max-grade">25
                        <sup>o</sup>
                        C
                        </div>
                        <div id="min-grade">25
                        <sup>o</sup>
                        C
                    </div>
                </div>
            </div>

            <div className="forecast" style={{backgroundColor: '#323544'}}>
                <div className="day" style={{backgroundColor: '#2d303d'}}>{week[(currentDayIndex + 2) % 7]}</div>
                <div className="day-card">
                        <div className="forecast-img">
                            <img alt="day-icon" src={icon4} style={{width: '48px'}}></img>
                        </div>
                    <div id="max-grade">25
                    <sup>o</sup>
                    C
                    </div>
                    <div id="min-grade">25
                    <sup>o</sup>
                    C
                    </div>
                </div>
            </div>
    
            <div className="forecast" style={{backgroundColor: '#262936'}}>
                <div className="day" style={{backgroundColor: '#222530'}}>{week[(currentDayIndex + 3) % 7]}</div>
                <div className="day-card">
                        <div className="forecast-img">
                            <img alt="day-icon" src={icon5} style={{width: '48px'}}></img>
                        </div>
                    <div id="max-grade">25
                    <sup>o</sup>
                    C
                    </div>
                    <div id="min-grade">25
                    <sup>o</sup>
                    C
                    </div>
                </div>
            </div>
    
            <div className="forecast" style={{backgroundColor: '#323544'}}>
                <div className="day" style={{backgroundColor: '#2d303d'}}>{week[(currentDayIndex + 4) % 7]}</div>
                <div className="day-card">
                    <div className="forecast-img">
                        <img alt="day-icon" src={icon6} style={{width: '48px'}}></img>
                    </div>
                    <div id="max-grade">25
                    <sup>o</sup>
                    C
                    </div>
                    <div id="min-grade">25
                    <sup>o</sup>
                    C
                    </div>
                </div>
            </div>
    
            <div className="forecast" style={{backgroundColor: '#262936'}}>
                <div className="day" style={{backgroundColor: '#222530'}}>{week[(currentDayIndex + 5) % 7]}</div>
                <div className="day-card">
                    <div className="forecast-img">
                        <img alt="day-icon" src={icon7} style={{width: '48px'}}></img>
                    </div>
                    <div id="max-grade">25
                    <sup>o</sup>
                    C
                    </div>
                    <div id="min-grade">25
                    <sup>o</sup>
                    C
                    </div>
                </div>
            </div>
    
            <div className="forecast" style={{backgroundColor: '#323544'}}>
                <div className="day" style={{backgroundColor: '#2d303d'}}>{week[(currentDayIndex + 6) % 7]}</div>
                <div className="day-card">
                    <div className="forecast-img">
                        <img alt="day-icon" src={icon8} style={{width: '48px'}}></img>
                    </div>
                    <div id="max-grade">25
                    <sup>o</sup>
                    C
                    </div>
                    <div id="min-grade">25
                    <sup>o</sup>
                    C
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    )
}

export default Forecast;
export { formattedDate1, formattedDate2, formattedDate3};
