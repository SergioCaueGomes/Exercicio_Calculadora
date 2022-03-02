import { Component, useState } from 'react'
import './Calculadora.css'
import Button from '../Component/button/Button'
import Display from '../Component/display/Display'



class Calculadora extends Component {

    
state = {
        displayValue:'0',
        numero1:'0',
        numero2:'0',
        operation: null,
        resultado:'0'
    }
    
    clearMemory = () => {
        this.setState({displayValue: 0})
    }
    
    addDigit = (digit) => {
        
        this.setState({displayValue: digit})
        
        if (digit == null){
                
            this.setState({displayValue: 0})
            
            }else if (digit == true) {
               
                this.state.displayValue({digit: numero1})
            
            // }else if(operation != null){

                // this.setState(displayValue = operation({numero1} + {numero2}))
            }
        }

    setOperation = (operation) => {

        // // this.setState({operation = operation}),    
            
        // if (this.label.setOperation == '+') {
              
        //     // return this.setState({resultado})
        // }
            
        this.setState({displayValue: operation})

    }

    render() {
        return (
            <div className='calculadora'>
                <Display value={this.state.displayValue}/>
                <Button label='AC' triple click={this.clearMemory} />
                <Button label='/' operation click={this.setOperation} />
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='*' operation click={this.setOperation} />
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='-' operation click={this.setOperation} />
                <Button label='3' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='1' click={this.addDigit} />
                <Button label='+' operation click={this.setOperation} />
                <Button label='0' double click={this.addDigit} />
                <Button label='.' click={this.addDigit} />
                <Button label='=' operation click={this.setOperation} />
            </div>
        )
    }
     
}
export default Calculadora;


    