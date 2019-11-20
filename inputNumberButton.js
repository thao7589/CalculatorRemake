import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



export default class inputNumberButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {input, handleOnPress} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => handleOnPress(input)}>
                <Text style={styles.text}>{input}</Text>    
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold'
    }
})