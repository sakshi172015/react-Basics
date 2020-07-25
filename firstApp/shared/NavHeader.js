import React from 'react' 
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function NavHeader({name, navigation}) {

    const openMenu = () => {
        console.log("opened")
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={StyleSheet.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image style={styles.logoImage} source={require('../assets/heart_logo.png')} />
                <Text style={styles.headerText}>{name}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '120%',
        height: '120%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#000",
        letterSpacing: 1,
        alignSelf: 'center'
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})