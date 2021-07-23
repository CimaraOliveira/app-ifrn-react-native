import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet} from 'react-native';
import { Routes } from './src/router2'; 
//import { Routes } from './src/routes'; 

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import GlobalStyles from './src/styles/GlobalStyles';


export default function App() {
  
  return (
      /**
       * O navigationContainer Precisar ficar sob as rotas, 
       * é responsável eme gerenciar todaas as rotas.
       * O SafeAreaView é Utilizar para controler da área de renderização. 
       */

       <NavigationContainer>
       <StatusBar style='dark'/>
       <SafeAreaView style={GlobalStyles.droidSafeArea}>
           <Routes/>
       </SafeAreaView>
     </NavigationContainer>
  );
}
''

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});


