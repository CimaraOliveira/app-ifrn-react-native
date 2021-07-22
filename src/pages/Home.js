import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton';


export function Home( { navigation} ){
    return(
        <View style={GlobalStyles.screenContainer}>
            <Text style={GlobalStyles.title}>
                IFRN - Pau dos Ferros
            </Text>                
    

            <MainButton title="Cursos" onPress={() => navigation.navigate('Pagina1')} />
            <MainButton title="Localização" onPress={() => navigation.navigate('Pagina2')} />
            
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
      
  });