import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputNumberButton from './inputNumberButton';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      result: '0',
      operator: null,
      firstValue: '',
      secondValue: '',
      nextValue: false
    }
    this.state = this.initialState;
  }

  renderButton = () => {
    let layout = numbers.map((row, rowIndex) => {
      let rowList = row.map((rowNumber, numberIndex) => {
          return <InputNumberButton value={rowNumber} key={'btn-' + numberIndex} handleOnPress={this.onPress.bind(this, rowNumber)} />
      })
      return <View style={styles.rowInput} key={'row-' + rowIndex}>{rowList}</View>
    })
    return layout;
  }

  onPress = num => {
    console.log(num)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.inputText}>{this.state.result}</Text>
        </View>
        <View style={styles.inputContainer}>
            {this.renderButton()}
        </View>
      </View>
    );
  }
  
}

const numbers = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '-'],
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  resultContainer: {
    flex: 2,
    backgroundColor: '#1E1240'
  },
  inputContainer: {
    flex: 8,
    justifyContent: 'center',
    backgroundColor: '#3D0075'
  },
  inputText: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  rowInput: {
    flex: 1,
    flexDirection: 'row'
  } 

});
