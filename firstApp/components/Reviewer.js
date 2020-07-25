import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from '../routes/Draw'

const getFonts = () => Font.loadAsync({
        'nunito-regular': require('../assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('../assets/fonts/Nunito-Bold.ttf')
    });

export default function Reviewer() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if(fontLoaded) {
        return (
            <Navigator />
        );
    } else {
        return(
            <AppLoading 
                startAsync={getFonts}
                onFinish={() => setFontLoaded(true)}
            />
        )
    }
}

const styles = StyleSheet.create({
    
});
