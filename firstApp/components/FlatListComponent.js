//List and onclick on each element
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function FlatListComponent() {
    const [people, setPeople] = useState([
        {name: 'Sakshi Jain', id: '1'},
        {name: 'Anshu', id: '2'},
        {name: 'Ishu', id: '3'},
        {name: 'Chinu', id: '4'},
        {name: 'Sonu', id: '5'},
        {name: 'Miku', id: '6'},
        {name: 'Dikshant', id: '7'},
    ])

    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
            return prevPeople.filter(person => person.id != id) //updating array and eliminate the one which is clicked
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
             keyExtractor={(item) => item.id}
             data={people}
             renderItem={({item}) => (
                <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
             )}/>
        </View>
    )
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
  