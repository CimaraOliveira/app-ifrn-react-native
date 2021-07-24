import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import Color from '../styles/Color';
import { MainButton } from '../components/MainButton';


export function Pagina1({ navigation }) {
    return (
        <View style={GlobalStyles.screenContainer}>
            <MainButton title="Técnicos" onPress={() => navigation.navigate('Medio')} />
            <MainButton title="Superior" onPress={() => navigation.navigate('Superior')} />

        </View>
    )
}