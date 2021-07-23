import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Pagina1 } from './pages/Pagina1'; 
import { Pagina2 } from './pages/Pagina2'; 
import { Medio } from './pages/Medio';
import { Superior } from './pages/Superior';
import { Alimentos } from './pages/Alimentos';
import { Informatica } from './pages/Informatica';
import { Apicultura } from './pages/Apicultura';
import { Ads } from './pages/Ads';
import {Quimica} from './pages/Quimica';
import Icon from "react-native-vector-icons/Ionicons";


import { Pagina3 } from './pages/Pagina3';
import { Pagina4 } from './pages/Pagina4';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();
const TecnicoStack = createStackNavigator();
const SuperiorStack = createStackNavigator();

function parte1StackScreen() {
    return(
      <TecnicoStack.Navigator>
        <TecnicoStack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <TecnicoStack.Screen name="Pagina1" component={Pagina1}  options={{ title: 'Cursos Ofertados'}}/>
        <SuperiorStack.Screen name="Pagina2" component={Pagina2} options={{title: 'Localização do campus'}}  />
        
      </TecnicoStack.Navigator>
    )
  }

  function parte2StackScreen() {
    return(
      <SuperiorStack.Navigator>
        <TecnicoStack.Screen name="Pagina1" component={Pagina1}  options={{ title: 'Cursos Ofertados'}}/>
        <TecnicoStack.Screen name="Superior" component={Superior} options={{title: 'Cursos Graduação'}} />
        <TecnicoStack.Screen name="Medio" component={Medio} />
        <TecnicoStack.Screen name="Alimentos" component={Alimentos} />
        <TecnicoStack.Screen name="Apicultura" component={Apicultura} />
        <TecnicoStack.Screen name="Informatica" component={Informatica} />
        <TecnicoStack.Screen name="Ads" component={Ads} />
        <TecnicoStack.Screen name="Quimica" component={Quimica} />
             
      </SuperiorStack.Navigator>
    )
  }

  export  function Routes() {
    return (
        <Tabs.Navigator 
          tabBarOptions={{
          labelPosition: 'beside-icon',
          activeTintColor: '#C72828',
          labelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          inactiveTintColor: '#B7B7CC',
        }}
        >
            <Tabs.Screen name="tecnico" 
              options={{
                tabBarIcon: ({ color }) => <Icon name="school" size={24} color="black" /> ,
                title: 'Inicio',
              }}
            component={parte1StackScreen}/>
  
            <Tabs.Screen name="superior" 
               options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-search" size={24} color="black" />
                ),
                title: 'Cursos',
              }}
            component={parte2StackScreen}/>
        </Tabs.Navigator>
    );
  }