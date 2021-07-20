import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Pagina1 } from './pages/Pagina1'; 
import { Pagina2 } from './pages/Pagina2'; 
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
        <TecnicoStack.Screen name="Pagina1" component={Pagina1} />
        <TecnicoStack.Screen name="Pagina2" component={Pagina2} />
      </TecnicoStack.Navigator>
    )
  }

  function parte3StackScreen() {
    return(
      <TecnicoStack.Navigator>
        <TecnicoStack.Screen name="Pagina1" component={Home} options={{headerShown:false}} />
        <TecnicoStack.Screen name="Pagina3" component={Pagina3} />
        <TecnicoStack.Screen name="Pagina4" component={Pagina4} />
      </TecnicoStack.Navigator>
    )
  }

  function parte2StackScreen() {
    return(
      <SuperiorStack.Navigator>
        <SuperiorStack.Screen name="Pagina3" component={Pagina3} options={{headerShown:false}}  />
        <SuperiorStack.Screen name="Pagina4" component={Pagina4} />
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
                tabBarIcon: ({ color }) => <Icon3 name="school" size={24} color="black" /> ,
                title: 'Parte 1',
              }}
            component={parte1StackScreen}/>
  
            <Tabs.Screen name="superior" 
               options={{
                tabBarIcon: ({ color }) => (
                  <Icon3 name="user-graduate" size={24} color="black" />
                ),
                title: 'Parte 2',
              }}
            component={parte2StackScreen}/>
        </Tabs.Navigator>
    );
  }