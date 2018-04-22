import React from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';

import Style from '../style';
import ForecastWeatherData from '../components/forecast-weather-data';

export default class ForecastWeather extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            city: "Paris",
            report: null,
            day1 : [],
            day2 : [],
            day3 : [],
            day4 : [],
            day5 : []
        }
    }

    static navigationOptions = {
        tabBarLabel: () => {
            return <Text style={Style.tabBarLabel}>A venir</Text>
        }
    }

    componentWillMount(){
        this.fetchWeather();
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=6219b5038e6984e3aec8d43a0aac3bf5`)
            .then((response) => {
                // DAY1
                this.setState({report: response.data})
                console.log("ICI >>>>>", this.state.report)
                this.setState({day1: [this.state.report.list[6].dt_txt, Math.round(this.state.report.list[1].main.temp - 273.15), this.state.report.list[1].weather[0].main]})
                console.log(this.state.day1)
                // DAY2
                this.setState({report: response.data})
                this.setState({day2: [this.state.report.list[14].dt_txt, Math.round(this.state.report.list[2].main.temp - 273.15), this.state.report.list[1].weather[0].main]})
                console.log(this.state.day2)
                // DAY3
                this.setState({report: response.data})
                this.setState({day3: [this.state.report.list[22].dt_txt, Math.round(this.state.report.list[3].main.temp - 273.15), this.state.report.list[1].weather[0].main]})
                console.log(this.state.day3)
                // DAY4
                this.setState({report: response.data})
                this.setState({day4: [this.state.report.list[30].dt_txt, Math.round(this.state.report.list[4].main.temp - 273.15), this.state.report.list[1].weather[0].main]})
                console.log(this.state.day4)
                // DAY5
                this.setState({report: response.data})
                this.setState({day5: [this.state.report.list[38].dt_txt, Math.round(this.state.report.list[5].main.temp - 273.15), this.state.report.list[1].weather[0].main]})
                console.log(this.state.day5)
            })
    }

    render(){
        return (
            <View style={Style.container}>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Mardi</Text>
                    <ForecastWeatherData data={this.state.day1} />
                    {/*<Text style={Style.temp} weather={this.state.day1}>25°</Text>*/}
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Mercredi</Text>
                    <ForecastWeatherData data={this.state.day2} />
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Jeudi</Text>
                    <ForecastWeatherData data={this.state.day3} />
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Vendredi</Text>
                    <ForecastWeatherData data={this.state.day4} />
                </View>
                <View style={Style.forecastContainer}>
                    <Text style={Style.title}>Samedi</Text>
                    <ForecastWeatherData data={this.state.day5} />
                </View>
            </View>
        );
    }
}