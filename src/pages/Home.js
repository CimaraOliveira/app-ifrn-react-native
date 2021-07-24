import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles';
import { MainButton } from '../components/MainButton';
import todayImage from '../../assets/imgs/today.jpg';
export function Home({ navigation }) {
    return (

        <View style={styles.container}>
            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>IFRN - Pau Dos Ferros</Text>
                </View>
            </ImageBackground>
            <View style={styles.taskList}>
                <MainButton title="Cursos" onPress={() => navigation.navigate('Pagina1')} />
                <MainButton title="Localização" onPress={() => navigation.navigate('Pagina2')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 4
    },
    taskList: {
        flex: 14,
        margin: 18,
    },

    title: {
        fontSize: 30,
        color: 'orange',
        marginLeft: 20,
        textAlign: 'center',
        top: 20
    },


});