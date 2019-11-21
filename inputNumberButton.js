import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class InputNumberButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(0); 
        return (
            <View style={ styles.container }>
                <TouchableOpacity >
                    <Text style={ styles.text }>{this.props.value}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1
    },
    text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }
})