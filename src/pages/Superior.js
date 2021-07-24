import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import Color from '../styles/Color';
import { MainButton } from '../components/MainButton';


export function Superior({ navigation }) {
    return (
        <View style={GlobalStyles.screenContainer}>

            <MainButton title="Ads" onPress={() => navigation.navigate('Ads')} />
            <MainButton title="Quimica" onPress={() => navigation.navigate('Quimica')} />




        </View>
    )
}