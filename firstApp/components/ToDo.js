import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem.js'
import AddTodos from './AddTodos';

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
        setTodos((prevTodos) => {
            return [
                { text: text, key: Math.random().toString() },
                ...prevTodos                
            ];
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/*Header*/}
                    <Header />
                <View style={styles.content}>
                {/*To do form*/}
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
        </View>

    )
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