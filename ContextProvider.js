import React, { Component } from 'react';
import Context from './Context';
import InputNumberButton from './inputNumberButton';

export default class ContextProvider extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            result: '0',
            firstNumber: '',
            secondNumber: '',
            operator: null, 
            nextNumber: false
        }
        this.state = this.initialState;
        this.handleOnPress = this.handleOnPress.bind(this);
        this.renderButton = this.renderButton.bind(this);
    }

    buttons = [
        ['CLEAR', 'DEL'],
        ['7', '8', '9', '/'],
        ['4', '5', '6', 'x'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];

    renderButton = () => { 
        console.log(23424);
        let layout = this.buttons.map((rowList, rowIndex) => {
            let listValue = rowList.map((value, index) => {
              return <InputNumberButton value={ value }/>
            })
            return <View style={ styles.inputRow }>{ listValue }</View>
        })
        return layout;
    }

    handleOnPress = (input) => {
        console.log(input);
    }

    render() {
        return(
            <Context.Provider value={{
                state: this.state, 
                press: this.handleOnPress, 
                render: this.renderButton
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}