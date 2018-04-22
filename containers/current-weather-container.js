import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

import Style from '../style';
import Gif from '../components/gif-content';

export default class CurrentWeatherContainer extends Component {

    
    render(){
        if(this.props.weather === 'Clear') {
            return (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        } else if(this.props.weather === 'Clouds') {
            return (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun-cloud.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        } else if(this.props.weather === 'Rain') {
            return (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/rain.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        } else if(this.props.weather === 'Thunderstorm') {
            return (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/thunder.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        } else if(this.props.weather === 'Drizzle') {
            return (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/drizzle.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        } else if(this.props.weather === 'Snow') {
            return (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/snow.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        } else if(this.props.weather === 'Mist' || this.props.weather === 'Fog') {
            return (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/mist.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        } else {
            return  (
                <View style={Style.forecastContainer}>
                    <Text style={Style.city}>Aujourd'hui à {this.props.city}</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/hail.png')} 
                    />
                    <Text style={Style.temp}>{this.props.temp}°C</Text>
                </View>
            )
        }
    }
}