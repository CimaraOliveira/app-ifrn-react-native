import React from 'react'
import {View,Text} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton';

export function Pagina3({ navigation} ){
    return(
        <View style={GlobalStyles.screenContainer}>
       

        <Text style={GlobalStyles.title}>
            IFRN - Pau dos Ferros
        </Text>
        <MainButton title="Página3" onPress={() => navigation.navigate('Pagina3')} />
    
       
     </View>
    )
}