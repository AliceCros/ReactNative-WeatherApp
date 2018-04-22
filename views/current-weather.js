import React from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';

import Style from '../style';
import CurrentWeatherContainer from '../containers/current-weather-container';
import GifQuote from '../containers/fun-container';
import Fun from '../fun-content';

export default class CurrentWeather extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            city: "Paris",
            report: null,
            temp: "",
            weather: "",
            funContent: ""
        }
    }

    static navigationOptions = {
        tabBarLabel: () => {
            return <Text style={Style.tabBarLabel}>Aujourd'hui</Text>
        }
    }

	componentWillMount() {
        this.fetchWeather()
        this.generateFun();
	}

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=6219b5038e6984e3aec8d43a0aac3bf5`)
            .then((response) => {
                this.setState({report: response.data})
                this.setState({temp: Math.round(this.state.report.main.temp - 273.15)})
                this.setState({weather: this.state.report.weather[0].main}) // Return Clear
                console.log('mon data ', this.state.report)
                console.log('my weather', this.state.weather)
            })
    }

    generateFun() {

        const keyArray = Object.keys(Fun);

		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        console.log(randomKey);
        console.log(Fun[randomKey].weather);

    }

    render(){
        return (
            <View style={Style.container}>
                <CurrentWeatherContainer 
                    city={this.state.city} 
                    weather={this.state.weather} 
                    temp={this.state.temp} />
                <GifQuote
                    city={this.state.city}
                    weather={this.state.weather}
                    temp={this.state.temp} 
                />
            </View>
        );
    }
}