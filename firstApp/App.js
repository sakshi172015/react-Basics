import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import List from './components/List';
import FlatListComponent from './components/FlatListComponent';
import ToDo from './components/ToDo';

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
      */}
      <ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
