// methods: GET, POST DELETE, PUT
// status: 200, 500, 404

import React from "react";
// import axios from "axios";
import Header from "./components/Header";
import Forecast, { formattedDate } from "./components/Forecast";
import play_button from '../src/images/icons/play-button@2x.png';
import arrow from '../src/images/icons/arrow.png';


import live_camera_1 from '../src/images/live-camera-1.jpg';
import live_camera_2 from '../src/images/live-camera-2.jpg';
import live_camera_3 from '../src/images/live-camera-3.jpg';
import live_camera_4 from '../src/images/live-camera-4.jpg';

function app() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,precipitation,wind_speed_10m&hourly=&timezone=auto`

    fetch(url).then((response) =>{
        if(response.status === 200) {
            return response.json();
        }
        else {
            console.error('Its not ok!')
        }
        console.log(response)

        }).then((info) => {
            console.log(info)
        });

        return(
            <div>
            <Header />
            <div className="hero">
            <container className="search-container">
                <form method="post">
                    <input type="search" maxLength={15} id="location-search" placeholder="Find your location"></input>
                    <input type="submit" value={'Find'} id="submit"></input>
                </form>
            </container>
            </div>
            <Forecast />

            {/* LIVE CAMERAS */}
            <div className="block">
                <div className="container">
                    <h2 className="section-text">Live cameras</h2>

                    <div className="live-camera-container">
                        <div className="live-camera-block first">
                        <div className="live-camera">
                            <img id="lc" alt="live-camera" src={live_camera_1}></img>
                                <div className="icon-container">
                                    <img src={play_button} alt="play-button" id="fa"/>
                                </div>
                            <div className="live-camera-title">New York</div>
                            <div className="live-camera-date">{formattedDate}</div>
                        </div>
                        </div>

                        <div className="live-camera-block">
                        <div className="live-camera">
                            <img id="lc" alt="live-camera" src={live_camera_2}></img>
                                <div className="icon-container">
                                    <img src={play_button} alt="play-button" id="fa"/>
                                </div>
                            <div className="live-camera-title">Los Angeles</div>
                            <div className="live-camera-date">{formattedDate}</div>
                        </div>
                        </div>

                        <div className="live-camera-block">
                        <div className="live-camera">
                            <img id="lc" alt="live-camera" src={live_camera_3}></img>
                                <div className="icon-container">
                                    <img src={play_button} alt="play-button" id="fa"/>
                                </div>
                            <div className="live-camera-title">Chicago</div>
                            <div className="live-camera-date">{formattedDate}</div>
                        </div>
                        </div>

                        <div className="live-camera-block">
                        <div className="live-camera">
                            <img id="lc" alt="live-camera" src={live_camera_4}></img>
                                <div className="icon-container">
                                    <img src={play_button} alt="play-button" id="fa"/>
                                </div>
                            <div className="live-camera-title">London</div>
                            <div className="live-camera-date">{formattedDate}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MORE DESCRIPTION */}
        <div className="description-block">
            <div className="description-container">
                <div className="sections">
                        <div className="desc-date">06.10</div>
                        <div className="description">
                        <div className="desc-title">Doloremque laudantium totam sequi</div>
                        <div className="desc-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illo saepe assumenda dolorem modi, expedita voluptatum
                        ducimus necessitatibus. Asperiores quod reprehenderit
                        necessitatibus harum, mollitia, odit et consequatur
                        maxime nisi amet doloremque.
                        </div>
                        <img src={arrow} alt="icon" id="arrow-icon"></img>
                        </div>


                        <div className="desc-date">06.10</div>
                        <div className="description">
                        <div className="desc-title">Doloremque laudantium totam sequi</div>
                        <div className="desc-text">
                        Nobis architecto consequatur ab, ea, eum autem aperiam
                        accusantium placeat vitae facere explicabo temporibus
                        minus distinctio cum optio quis, dignissimos eius
                        aspernatur fuga. Praesentium totam, corrupti beatae
                        amet expedita veritatis.
                        </div>
                        <img src={arrow} alt="icon" id="arrow-icon"></img>
                        </div>

                        <div className="desc-date">06.10</div>
                        <div className="description">
                        <div className="desc-title">Doloremque laudantium totam sequi</div>
                        <div className="desc-text">
                        Enim impedit officiis placeat qui recusandae doloremque possimus,
                        iusto blanditiis, quam optio delectus maiores. Possimus rerum,
                        velit cum natus eos. Cumque pariatur beatae asperiores,
                        esse libero quas ad dolorem. Voluptates.
                        </div>
                        <img src={arrow} alt="icon" id="arrow-icon"></img>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        )
    }

// function app() {

    // const url = `https://api.open-meteo.com/v1/forecast?latitude=40.730610&longitude=-73.935242&current=temperature_2m,is_day,wind_speed_10m`
    // fetch(url).then((response) =>{
    //         return response.json();
    //     })
    //     .then((info) => {
    //         renderWeather(info.current)
    //     });


    //     function renderWeather(data) {
    //         const div = document.createElement('div');
    //         div.textContent = `
    //         temp: ${data.temperature_2m}
    //         wind speed: ${data.wind_speed_10m}
    //         now: ${data.is_day === 0 ? 'night' : 'day'}
    //         `

    //         document.body.append(div)
    //     }


//         axios.post(
//             'https://jsonplaceholder.typicode.com/posts', {
//                 title: 'ajajaaaaaa'
//             }
//         ).then((response) => {
//             console.log(response)
//         })
// }
export default app
