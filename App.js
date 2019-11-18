import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text></Text>
      </View>
      <View style={styles.inputContainer}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  resultContainer: {
    flex: 2,
    backgroundColor: 'grey'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: 'blue'
  }
});
