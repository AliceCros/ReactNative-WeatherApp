import React from 'react';
import { Text, View, Image } from 'react-native';

import Style from '../style';
import ForecastData from '../components/forecast-weather-data';

export default class ForecastWeatherData extends React.Component {

    getIcons = (data) => {
        if(data[2] === 'Clear'){
            console.log(data[0], data[2]);
            return <Image style={Style.icon} source={require('../images/sun.png')} />
        } else if(data[2] === 'Clouds') {
            return <Image style={Style.icon} source={require('../images/sun-cloud.png')} />
        } else if(data[2] === 'Rain') {
            return <Image style={Style.icon} source={require('../images/rain.png')} />
        } else if(data[2] === 'Thunderstorm') {
            return <Image style={Style.icon} source={require('../images/thunder.png')} />
        } else if(data[2] === 'Drizzle') {
            return <Image style={Style.icon} source={require('../images/drizzle.png')} />
        } else if(data[2] === 'Snow') {
            return <Image style={Style.icon} source={require('../images/snow.png')} />
        } else if(data[2] === 'Mist' || data[2] === 'Fog') {
            return <Image style={Style.icon} source={require('../images/mist.png')} />
        } else {
            return <Image style={Style.icon} source={require('../images/hail.png')} />
        }
    }

    render(){
        return (
            <View style={Style.forecastContainer}>
                {this.getIcons(this.props.data)}
                <Text style={Style.temp} value="temp">{this.props.data[1]}</Text>
            </View>
        )
    }

}
