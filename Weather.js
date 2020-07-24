import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import Proptypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient"

const weatherOptions = {
    Clouds: {
        iconName: 'cloud',
        gradient: ['#00B4DB', '#0083B0'],
        title: "Cloud",
        subtitle: "Be careful the rain",
    },
    Thunderstorm: {
        iconName: 'weather-lightning-rainy',
        gradient: ['#0f0c29', '#302b63', '#24243e'],
        title: "Thunderstorm",
        subtitle: "Don't go outside !",
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3C3B3F', '#605C3C'],
        title: "Drizzle",
        subtitle: "It's quite a scene of movie",
    },
    Rain: {
        iconName: 'weather-lightning-rainy',
        gradient: ['#a8c0ff', '#3f2b96'],
        title: "Rain",
        subtitle: "Don't forget to take an unbrella",
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#ADA996', '#F2F2F2', '#DBDBDB', '#ADA996'],
        title: "Snow",
        subtitle: "Let's play outside",
    },
    Atmosphere: {
        iconName: 'weather-night',
        gradient: ['#355C7D', '#6C5B7B', '#C06C84'],
        title: "Atmosphere",
        subtitle: "Leave me alone",
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#4e54c8', '#8f94fb'],
        title: "Clear",
        subtitle: "What a clear weather !",
    },
}

function Weather( {temp, condition} ) {
    console.log(weatherOptions);
    return (
        <View style={styles.container}>
            <LinearGradient
            colors={weatherOptions[condition].gradient}
          style={{
            flex: 1,
            padding: 15,
            alignItems: 'center',
          }}>
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={88} color="white" />
                    <Text style={styles.text}>{temp}℃</Text>
                </View >
                <View style={styles.halfContainer}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey",
    },
    halfContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: 'white',
    },
    title: {
        color: 'white',
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 15,
    },
    subtitle: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center',
    }
})

Weather.proptypes = {
    temp: Proptypes.number.isRequired,
    condition: Proptypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
    ]).isRequired,
}

export default Weather;