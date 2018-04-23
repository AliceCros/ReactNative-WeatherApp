import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

import Style from '../style';
import Gif from '../components/gif-content';

export default class CurrentWeatherContainer extends Component {

    getWeather = () => {
        if(this.props.weather === 'Clear') {
            return <Image style={Style.icon} source={require('../images/sun.png')} />
        } else if(this.props.weather === 'Clouds') {
            return <Image style={Style.icon} source={require('../images/sun-cloud.png')} />
        } else if(this.props.weather === 'Rain') {
            return <Image style={Style.icon} source={require('../images/rain.png')} />
        } else if(this.props.weather === 'Thunderstorm') {
            return <Image style={Style.icon} source={require('../images/thunder.png')} />
        } else if(this.props.weather === 'Drizzle') {
            return <Image style={Style.icon} source={require('../images/drizzle.png')} />
        } else if(this.props.weather === 'Snow') {
            return <Image style={Style.icon} source={require('../images/snow.png')} />
        } else if(this.props.weather === 'Mist' || this.props.weather === 'Fog') {
            return <Image style={Style.icon} source={require('../images/mist.png')} />
        } else {
            return <Image style={Style.icon} source={require('../images/hail.png')} />
        }
    }

    render(){
        return (
            <View style={Style.forecastContainer}>
                <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                {this.getWeather(this.props.weather)}
                <Text style={Style.temp}>{this.props.temp}°C</Text>
            </View>
        )
    }
}