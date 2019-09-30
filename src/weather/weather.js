import React, {Component} from 'react';
import './weather.css';


export default class Weather extends Component {

    render() {
        const icon = this.props.icon;
        return (
            <div className='weatherInfo'>
                <ul className='dataOf'>
                    <li>
                        <span>Weather for </span>
                        <span>{this.props.city} city in {this.props.country} country  </span>
                        <img src={`http://openweathermap.org/img/w/${icon}.png`}/>
                    </li>
                    <li>
                        <span>Date and time in youre location </span>
                        <span> {this.props.date}</span>
                    </li>
                    <li>
                        <span>Clouds: </span>
                        <span> {this.props.clouds} %</span>
                    </li>
                    <li>
                        <span>Wind speed: </span>
                        <span> {this.props.windSpeed} m/s</span>
                    </li>
                    <li>
                        <span>Air humidity: </span>
                        <span> {this.props.humidity} %</span>
                    </li>
                    <li>
                        <span>Air temperature: </span>
                        <span> {this.props.temp} &#176;C</span>
                    </li>
                </ul>

            </div>
        )
    }
}

