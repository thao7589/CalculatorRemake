import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputNumberButton from './inputNumberButton';
import { getTimeFieldValues } from 'uuid-js';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      result: '0',
      firstNumber: '',
      secondNumber: '',
      operator: null,
      hadOperator: false,
      nextNumber: false
    };

    this.state = this.initialState;
  }

  handleOnPress = value => {
    let { result, firstNumber, secondNumber, operator, nextNumber } = this.state;
    switch(value){
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
          result: result === '0' ? value : result + value
        })
        if (!nextNumber) {
          this.setState({
            firstNumber: firstNumber + value
          })
        } else {
          this.setState({
            secondNumber: secondNumber + value
          })
        }
        break;
      case '/':  
      case '+':  
      case '-':  
      case 'x':
        console.log('ekrjewjr')
        this.setState({
          result: operator ? result.substr(0, result.length - 1) + value : result + value,
          operator: value == 'x' ? '*' : value,
          nextNumber: true
        })
        break;
      case '.':
        console.log('dot');
        break;    
      case '=':
        this.setState({
          result: eval(firstNumber + operator + secondNumber)
        })
        break;
      case 'CLEAR':
        this.setState(this.initialState);
        break;
      case 'DEL':
        this.setState({
          result: result.length == 1 ? '0' : result.substr(0, result.length - 1)
        })    
    }
  }

  renderButton = () => {
    let layout = buttons.map((rowList, rowIndex) => {
      let buttonList = rowList.map((value, valueIndex) => {
        return <InputNumberButton input={value} handleOnPress={this.handleOnPress.bind(this, value)} key={'btn-'+ valueIndex}/>
      })
      return <View style={styles.rowInput} key={'row-' + rowIndex}>{buttonList}</View>
    })
    return layout;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{this.state.result}</Text>
        </View>
        <View style={styles.inputContainer}>
          {this.renderButton()}
        </View>
      </View>
    )
  }
}

const buttons = [
  ['CLEAR', 'DEL'],
  ['7','8','9','/'],
  ['4','5','6','X'],
  ['1','2','3','-'],
  ['0','.','=','+'],
];

const styles = StyleSheet.create({ 
  container: {
    flex: 1
  },
  resultContainer: {
    flex: 2,
    backgroundColor: '#1E1240',
    justifyContent: 'center'
  },
  resultValue: {
    fontSize: 80,
    color: '#fff',
    textAlign: 'right',
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 8,
    justifyContent: 'center',
    backgroundColor: '#3D0075'
  },
  rowInput: {
    flex: 1,
    flexDirection: 'row'
  }
});
 