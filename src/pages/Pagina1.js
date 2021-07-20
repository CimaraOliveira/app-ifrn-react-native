import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import Color from '../styles/Color';

export function Pagina1(){
    return(
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.title}>
                Informações do Campus
            </Text>
           
         </View>
    )
}