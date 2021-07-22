import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Pagina1 } from './pages/Pagina1'; 
import { Pagina2 } from './pages/Pagina2'; 
import { Pagina3 } from './pages/Pagina3';
import { Pagina4 } from './pages/Pagina4';
import {Cursos } from './pages/Cursos';
import { Medio } from './pages/Medio';
import { Superior } from './pages/Superior';
import { Alimentos } from './pages/Alimentos';
import { Informatica } from './pages/Informatica';
import { Apicultura } from './pages/Apicultura';


// o nome atribuido será usado  para navegar entre as as telas,
// será inserido em  onPress={() => navigation.navigate('nomedatela)

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
      <Stack.Screen name="Pagina1" component={Pagina1} options={{ title: 'Cursos Ofertados'}} />
      <Stack.Screen name="Pagina2" component={Pagina2} options={{ title: 'Localização do Campus'}} />
      <Stack.Screen name="Pagina3" component={Pagina3} options={{ title: 'Informações do Campus', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Pagina4" component={Pagina4} options={{ title: 'Informações do Campus', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Cursos" component={Cursos} options={{ title: 'Informações do Campus', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Superior" component={Superior} options={{ title: 'Informações do Campus', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Medio" component={Medio} options={{ title: 'Curso Médio'}} />
      <Stack.Screen name="Alimentos" component={Alimentos} options={{ title: 'Técnico em Alimentos'}} />
      <Stack.Screen name="Informatica" component={Informatica} options={{ title: 'Curso de Informática'}} />
      <Stack.Screen name="Apicultura" component={Apicultura} options={{ title: 'Curso de Apicultura'}} />





    </Stack.Navigator>
  );
}