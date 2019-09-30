import React, {Component} from 'react';
import './App.css';
import Form from '../form';
import Weather from '../weather';


const APIbase = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const APIid = '&APPID=9e8065e34a6257f2541615c08b855863';


export default class App extends Component {

    state = {
        // body: {},
        // city:null,
        // country: null,
        // weather: {},
        // main:{},
        // clouds:{},
        // wind:{},
        // dt_txt:{},

    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        console.log(city);
        const api_call = await fetch(`${APIbase}${city}${APIid}`)

        .then((response) => {
            return response.json();
        })
            .then((body) => {
                this.setState({
                    city: body.city.name,
                    country: body.city.country,
                    weather: body.list[1],
                });
                const {all} = this.state.weather.clouds;
                this.setState({all});
                // const {main} = this.state.weather;
                // this.setState(main);
                const {humidity} = this.state.weather.main;
                this.setState({humidity});
                const {speed} = this.state.weather.wind;
                this.setState({speed});
                const {temp} = this.state.weather.main;
                let newTemp = (temp-273).toFixed(2);
                this.setState({newTemp } );
                const {dt_txt} = this.state.weather;
                this.setState({dt_txt});
                const {icon} = this.state.weather.weather[0];
                this.setState({icon});


                console.log(this.state.weather);
                console.log(icon);
                console.log(newTemp);
                console.log(body.city.name);
                console.log(body.city.country);
                console.log(speed);
                console.log(all);
                console.log(dt_txt);
                console.log(humidity)

            });
    };


    render() {
        return (
            <div className='widget'>
                <h3>The weather forecast </h3>
                <div className=''>
                    <Form Weather={this.getWeather}/>
                </div>
                <div>
                    <Weather
                        city={this.state.city}
                        country={this.state.country}
                        date={this.state.dt_txt}
                        clouds={this.state.all}
                        windSpeed={this.state.speed}
                        humidity={this.state.humidity}
                        temp={this.state.newTemp}
                        icon = {this.state.icon}
                    />
                </div>
            </div>
        )
    }
}
