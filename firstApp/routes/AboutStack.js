import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../components/About'
import NavHeader from '../shared/NavHeader'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <NavHeader name="About" navigation={navigation}/>
            }
            //headerStyle: { backgroundColor: 'coral' } dont do again and again pass as default para but can overside here
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default AboutStack;