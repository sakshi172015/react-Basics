import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, RecyclerViewBackedScrollView } from 'react-native';
import List from './components/List';
import FlatListComponent from './components/FlatListComponent';
import ToDo from './components/ToDo';
import Reviewer from './components/Reviewer';
import * as Font from 'expo-font'

const getFonts = () => Font.loadAsync({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    });

export default function App() {
  const [todos, setTodes] = useState([
    { text: 'Buy Coffee', key:'1' },
    { text: 'Create an app', key:'2' },
    {text: 'Text crush', key:'3'},
  ]);

  return (
  
      <View style={styles.container}>
        {/*
        <List />
        <FlatListComponent />
        <ToDo />
        */}
        <Reviewer />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
