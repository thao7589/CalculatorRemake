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

  onPress = input => {
    let { result, operator, firstValue, secondValue, nextValue } = this.state;
    switch(input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          result: result === '0' ? input : result + input
        })
        if (!nextValue) {
          this.setState({
            firstValue: firstValue.length == 0 ? input : firstValue + input
          })
        } else {
          this.setState({
            secondValue: secondValue.length == 0 ? input : secondValue + input
          })
        }
        break;
      case '/':  
      case 'x':  
      case '-':  
      case '+':
        this.setState({
          nextValue: true,
          operator: input,
          result: (operator !== null ? result.substr(0, result.length - 1) : result) + input
        })
        break;
      case '.':
        console.log('dot');
        break;
      case '=':
        let finalResult = eval(firstValue + operator + secondValue);

        this.setState({
          result: finalResult,
          firstValue: finalResult,
          nextValue: false,
          operator: null
        })
        break;  
      case 'CLEAR':
        this.setState(this.initialState);
        break;
      case 'DEL':
        this.setState({
            result: result.length == 1 ? '0' : result.substr(0, result.length - 1)
        });
        break;    
    }
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
  ['CLEAR', 'DEL'],
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
