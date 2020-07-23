import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem.js'
import AddTodos from './AddTodos';
import SandBox from './SandBox';

export default function ToDo() {
    const [todos, setTodos] = useState([
        { text: 'Buy Coffee', key:'1' },
        { text: 'Create an app', key:'2' },
        {text: 'Text crush', key:'3'},
      ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }

    const submitHandler = (text) => {
        if(text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos                
                ];
            })
        } else {
            console.log("blahhh");
            Alert.alert(
                "Alert Title",
                "My Alert Msg",
                [
                  {
                    text: "Understood",
                    onPress: () => console.log("Understood"),
                  }
                ]
              );
        }
    }

    return (
        //<SandBox />
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                    <Header />
                    <View style={styles.content}>
                        <AddTodos submitHandler={submitHandler}/>
                        <View style={styles.list}>
                            <FlatList
                                data={todos}
                                renderItem = {({ item }) => (
                                    <TodoItem item={item} pressHandler={pressHandler}/>
                                )}
                            />
                            </View>
                    </View>
                </View>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
      flex: 1
    },
    list: {
      marginTop: 20,
      flex: 1
    }
  });