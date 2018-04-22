import React from 'react';
import { Text, View, Image } from 'react-native';

import Style from '../style';

export default class ForecastWeather extends React.Component {

    static navigationOptions = {
        tabBarLabel: () => {
            return <Text style={Style.tabBarLabel}>A venir</Text>
        }
    }

    render(){
        return (
            <View style={Style.container}>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Mardi</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>25°</Text>
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Mercredi</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>25°</Text>
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Jeudi</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>25°</Text>
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Vendredi</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>25°</Text>
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Samedi</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>25°</Text>
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Dimanche</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>25°</Text>
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Lundi</Text>
                    <Image
                        style={Style.icon} 
                        source={require('../images/sun.png')} 
                    />
                    <Text style={Style.temp}>25°</Text>
                </View>
            </View>
        );
    }
}