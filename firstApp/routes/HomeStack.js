import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import Home from '../components/Home.js'
import ReviewDetails from '../components/ReviewDetails.js'
import About from '../components/About'
import NavHeader from '../shared/NavHeader'

//whichever is the top one that is shown by default
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <NavHeader name="Home" navigation={navigation}/>
            }
            //headerStyle: { backgroundColor: 'coral' } dont do again and again pass as default para but can overside here
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details",
            //headerStyle: { backgroundColor: 'coral' }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

//export default createAppContainer(HomeStack);
export default HomeStack;
