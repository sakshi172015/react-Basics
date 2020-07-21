import React, { useState } from 'react';;
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function AddTodos({submitHandler}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler} 
            />
            <View style={styles.buttonContainer}>
                <Button onPress={() => submitHandler(text)} title="add todo" color='coral' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderColor: '#ddd',
        borderWidth: 1
    },
    buttonContainer: {
        width: 110,
    }
  });