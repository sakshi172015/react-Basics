import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.heading}>My TODO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'coral',
        paddingTop: 20,    
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        color: "#fff"
    }
  });