// methods: GET, POST DELETE, PUT
// status: 200, 500, 404

import React from "react";
// import axios from "axios";
import Header from "./components/Header";
import Forecast from "./components/Forecast";

function app() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=47.4116&longitude=28.3699&current=temperature_2m`

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