import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Style from './style';

import CurrentWeather from './views/current-weather';
import ForecastWeather from './views/forecast-weather';

const Tabs = TabNavigator ({
  CurrentWeather: { screen: CurrentWeather },
  ForecastWeather: { screen: ForecastWeather }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#000',
    activeBackgroundColor: '#99e8d8',
    inactiveTintColor: '#ffffff',
    showIcon: false,
    showLabel: true,
    indicatorStyle: { // Ne s'affiche pas
      height: 2,
      backgroundColor: '#000000'
    },
    labelStyle: {
    },
    style: {
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#99e8d8'
    } 
  }
})

export default class App extends React.Component {

  render() {

    return (
      <View style={Style.container} >
        <StatusBar hidden={false} /> {/* Hide native status bar with network, battery, hour... */}
        <Tabs style={Style.tab} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
});
