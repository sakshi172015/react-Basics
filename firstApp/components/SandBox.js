import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
        alignItems: 'flex-end',
        backgroundColor: "#ddd"
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 20
    },
    boxTwo: {
        flex: 2,
        backgroundColor: 'violet',
        padding: 30
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 40
    },
    boxFour: {
        flex: 3,
        backgroundColor: 'orange',
        padding: 50
    },
});