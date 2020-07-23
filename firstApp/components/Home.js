import React, { useState }from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breadth of Fresh Air', rating: 5, body: 'lorem ipsum', key:'1'},
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key:'2'},
        { title: 'Not So "Final" Fantasy ', rating: 3, body: 'lorem ipsum', key:'3'},
    ]);
/*
    const pressHandler = () => {
        //navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
        //to go back navigation.goback();
    }
*/
    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
            {/*<Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="review page" onPress={pressHandler}/>*/}
        </View>
    )
}

