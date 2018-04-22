import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

import Style from '../style';

export default class FunContainer extends Component {

    render(){

        return (
            <View style={Style.container}>
                <Image 
                    style={Style.gif}
                    source={{uri: 'https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif'}} 
                />
                 <Text style={Style.quote}>">Ouh Pinaise>"</Text>
            </View>
        )

    }
}