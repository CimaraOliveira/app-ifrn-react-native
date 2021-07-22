import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';

export function Informatica(){
    return(
        <View style={GlobalStyles.screenContainer}>
          
            <View style={styles.box}>
            <View style={styles.rodape}>        
               <Text style={styles.textorodape} >
             BR 405, KM 154, S/N, Bairro Chico Cajá, 
             Pau dos Ferros/RN, CEP 59900-000, CNPJ: 10.877.412/0006-72
             Coordenação de Comunicação Social e Eventos (COCSEV) Horário de atendimento: 9h às 12h e 14h às 18h (segunda a sexta-feira)
            E-mail: comunicacao.pf@ifrn.edu.br
              Telefone: (84) 4005 4109
            </Text> 
        </View>
        </View>
           
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
        top:15,
        fontSize:16,
        margin:1,
        marginTop:10,        
        color:'black',
        textAlign:'center',
        alignSelf: 'flex-end'
      },    
      box:{
        width:300,
        height:200,
        top:25,
        left:1,
        margin:10,
        marginTop:15,
        backgroundColor:'#ADD8E6',
        flexDirection: 'row',
        borderRadius:15,
      }  
  });