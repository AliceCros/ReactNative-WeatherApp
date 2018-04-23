import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

import Style from '../style';
import FunContent from '../fun-content';

export default class FunContainer extends Component {

    generateFunContent(weather){

        const keyArray = Object.keys(FunContent);
        console.log(keyArray)

        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        console.log(randomKey)
        console.log(weather)

        if(FunContent[randomKey].weather !== weather){
            // To be handled
        }

        if(FunContent[randomKey].weather === weather) {
            return (
                <View style={Style.container}>
                    <Image 
                        style={Style.gif}
                        source={{uri: FunContent[randomKey].gif}} 
                    />
                    <Text style={Style.quote}>{FunContent[randomKey].quote}</Text>
                </View>
            )
        } 
    }

    render(){

        return (
            <View style={Style.container}>
                {this.generateFunContent(this.props.weather)}
            </View>
        )

    }
}