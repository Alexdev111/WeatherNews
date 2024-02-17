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
        return (
            <div className='forecast-table'>
            <div className="table">
                <div className="table-wrapper">
                    <div className="today">
                    <div className="today-date">
                        <div className="today">Monday</div>
                        <div className="date">{formattedDate1}</div>
                    </div>
                    <div className="forecast-info">
                        <div className="city">Moldova</div>
                        <div className="number number-icon">
                            23
                            <sup>o</sup>
                            C
                            <MySVG1 id="icon1"/>
                        </div>
                    <div className="day-details">
                        <div id="umbrella-icon">
                            <img src={UmbrellaIcon} alt="umbrella-icon" id="umbrella"/>
                                22%
                        </div>
                        <div id="wind-icon">
                            <img src={WindIcon} alt="wind-icon" id="wind"/>
                                18km/h
                        </div>
                        <div id="compass-icon">
                            <img src={CompassIcon} alt="compass-icon" id="compass"/>
                                East
                        </div>
                    </div>
                    </div>
                </div>
    
            <div className="forecast" style={{backgroundColor: '#262936'}}>
                <div className="day" style={{backgroundColor: '#222530'}}>Tuesday</div>
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
                <div className="day" style={{backgroundColor: '#2d303d'}}>Wednesday</div>
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
                <div className="day" style={{backgroundColor: '#222530'}}>Thursday</div>
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
                <div className="day" style={{backgroundColor: '#2d303d'}}>Friday</div>
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
                <div className="day" style={{backgroundColor: '#222530'}}>Saturday</div>
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
                <div className="day" style={{backgroundColor: '#2d303d'}}>Sunday</div>
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
