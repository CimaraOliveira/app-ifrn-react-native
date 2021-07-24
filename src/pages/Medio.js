import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import Color from '../styles/Color';
import { MainButton } from '../components/MainButton';


export function Medio({ navigation }) {
    return (
        <View style={GlobalStyles.screenContainer}>

            <MainButton title="Alimentos" onPress={() => navigation.navigate('Alimentos')} />
            <MainButton title="Apicultura" onPress={() => navigation.navigate('Apicultura')} />
            <MainButton title="Informatica" onPress={() => navigation.navigate('Informatica')} />



        </View>
    )
}