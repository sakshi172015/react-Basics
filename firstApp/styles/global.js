import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: "#333"
    },
    paragraph: {
        marginVertical: 8,
        lineHeight:20
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 8,
        borderRadius: 6
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    }
});

export const Images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    },
    styles: {
        '1': {width: 25, height: 25}, 
        '2': {width: 50, height: 25},
        '3': {width: 75, height: 25},
        '4': {width: 100, height: 25},
        '5': {width: 125, height: 25}
    }
}