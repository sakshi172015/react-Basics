import React, { useState }from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import Modal from 'react-native-modal'
import ReviewForm from './ReviewForm.js'

export default function Home({navigation}) {

    const [isModalVisible , setModalVisible] = useState(false)
    const toggleModalFalse = () => {
        setModalVisible(false);
    };
    const toggleModalTrue = () => {
        setModalVisible(true)
    }
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breadth of Fresh Air', rating: 5, body: 'lorem ipsum', key:'1'},
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key:'2'},
        { title: 'Not So "Final" Fantasy ', rating: 3, body: 'lorem ipsum', key:'3'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReview) => {
            return[review, ...currentReview]
        })
        toggleModalFalse();
    }
/*
    const pressHandler = () => {
        //navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
        //to go back navigation.goback();
    }
*/
    return (
        <View style={globalStyles.container}>
            <View>
                <MaterialIcons 
                    name="close"
                    size={24}
                    onPress={toggleModalFalse}/>
                <MaterialIcons 
                    name="add"
                    size={24}
                    onPress={toggleModalTrue}/>
                <Modal isVisible={isModalVisible} animationIn="bounce">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{flex: 1}}>
                            <Text>hello!</Text>
                            <ReviewForm addReview={addReview}/>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
            
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            {/*<Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title="review page" onPress={pressHandler}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {

    }
})