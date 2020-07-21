import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function List() {
    const [people, setPeople] = useState([
        {name: 'Sakshi Jain', key: '1'},
        {name: 'Anshu', key: '2'},
        {name: 'Ishu', key: '3'},
        {name: 'Chinu', key: '4'},
        {name: 'Sonu', key: '5'},
        {name: 'Miku', key: '6'},
        {name: 'Dikshant', key: '7'},
    ])
  return (
    <View style={styles.container}>
      <ScrollView>
          {
              people.map((item) => {
                  return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                  )
              })
          }
          </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24
  }
});
