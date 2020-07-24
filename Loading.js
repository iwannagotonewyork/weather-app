import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting a Weather Information</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#FDF6AA",
        paddingVertical: 100,
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 30,
        color: "#2c2c2c",
    },
})