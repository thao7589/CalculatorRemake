import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Context from './Context';
import ContextProvider from './ContextProvider';
import InputNumberButton from './inputNumberButton'
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContextProvider>
        <Context.Consumer> 
          {(data) => (
            <View style={ styles.container }>
              <View style={ styles.resultContainer }>
                  <Text style={ styles.resultText }>{data.state.result}</Text>
              </View>
              <View style={ styles.inputContainer }>
                {data.render} 
              </View>
            </View>
          )}
        </Context.Consumer>
      </ContextProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  resultContainer: {
    flex: 2,
    backgroundColor: 'green'
  },
  resultText: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    margin: 20
  },
  inputContainer: {
    flex: 8,
    backgroundColor: 'blue'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  }
})