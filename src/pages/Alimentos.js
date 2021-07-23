import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';

export function Alimentos(){
    return(
        <View style={GlobalStyles.screenContainer}>
             <Text style={styles.textTitle}>
                Sobre o curso:
              </Text>
             
             <View style={styles.box}>
            <View style={styles.rodape}>        
               <Text style={styles.textorodape} >
               O Curso Técnico Integrado em Alimentos forma profissionais que atuam no processamento e
               conservação de matérias-primas, produtos e subprodutos da indústria alimentícia e de bebidas;               
            </Text> 
        </View>        
        </View>

            <View>
                <Text style={styles.textTitle}>
                Carga Horária do curso:
                </Text>
             </View>

        <View style={styles.box1}>
            <View style={styles.rodape}>        
               <Text style={styles.texto} >
               4.100h             
            </Text> 
        </View>        
        </View>

        <View>
                <Text style={styles.textTitle}>
                Duração do curso:
                </Text>
             </View>

        <View style={styles.box1}>
            <View style={styles.rodape}>        
               <Text style={styles.texto} >
               4 anos          
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
        top:10,
        fontSize:16,
        margin:1,
        marginTop:10,        
        color:'black',
        textAlign:'center',
        alignItems:'center',
        textAlignVertical: "center",
      
      },    
      texto:{
        top:10,
        fontSize:16,
        margin:1,
        marginTop:10,        
        color:'black',
        textAlign:'center',
        alignItems:'center',
        textAlignVertical: "center",
        left: 110
      }, 
      
      box:{
        width:300,
        height:150,
        top:7,
        left:1,
        margin:10,
        marginTop:0,
        backgroundColor:'#ADD8E6',
        flexDirection: 'row',
        borderRadius:15,
      }  ,
      box1:{
        width:300,
        height:50,
        top:7,
        left:1,
        margin:10,
        marginTop:2,
        backgroundColor:'#ADD8E6',
        flexDirection: 'row',
        borderRadius:15,
      },
      textTitle:{
        padding:7, 
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20
      }
  });