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

        <View style={styles.rodape}>        
               <Text style={styles.textorodape} >
             BR 405, KM 154, S/N, Bairro Chico Cajá, Pau dos Ferros/RN, CEP 59900-000, CNPJ: 10.877.412/0006-72 Coordenação de Comunicação Social e Eventos (COCSEV) Horário de atendimento: 9h às 12h e 14h às 18h (segunda a sexta-feira)
              E-mail: comunicacao.pf@ifrn.edu.br
              Telefone: (84) 4005 4109
            </Text> 
        </View>
    

            <MainButton title="Cursos" onPress={() => navigation.navigate('Pagina1')} />
            <MainButton title="Pagina2" onPress={() => navigation.navigate('Pagina2')} />
            
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
  
   title:{
      padding:10,
      right: 100
     
    },
    textorodape:{
        top:400,
        fontSize:12,
        margin:1,
        marginTop:10,        
        color:'black',
        textAlign:'center',
        alignSelf: 'flex-end'
      },      
  });