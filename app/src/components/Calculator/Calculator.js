import React, {Component} from 'react';
import calculatorImg from './calculator.png';

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            header: 'SUPERDUPER CALC',
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false
        }
    }

    updateHeader(val) {
        this.setState({
            header: val            
        })
    }

    setDisplay(num) {
        this.setState({
            display: num
        })
    }
    
    render(){
        
    return (
      <div id="calculator-container">
        <input id="header-input"
        onChange={ e => this.updateHeader(e.target.value)}
        />
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div>

          <div className="btn clear"></div>

          <div onClick={()=>this.setDisplay(<b>0</b>)} className="btn zero"></div>
          <div onClick={()=>this.setDisplay(<b>1</b>)}className="btn one"></div>
          <div onClick={()=>this.setDisplay(<b>2</b>)}className="btn two"></div>
          <div onClick={()=>this.setDisplay(<b>3</b>)}className="btn three"></div>
          <div onClick={()=>this.setDisplay(<b>4</b>)}className="btn four"></div>
          <div onClick={()=>this.setDisplay(<b>5</b>)}className="btn five"></div>
          <div onClick={()=>this.setDisplay(<b>6</b>)}className="btn six"></div>
          <div onClick={()=>this.setDisplay(<b>7</b>)}className="btn seven"></div>
          <div onClick={()=>this.setDisplay(<b>8</b>)}className="btn eight"></div>
          <div onClick={()=>this.setDisplay(<b>9</b>)}className="btn nine"></div>

          <div className="btn equal"></div>
          <div className="btn multiply"></div>
          <div className="btn divide"></div>
          <div className="btn subtract"></div>
          <div className="btn add"></div>
        </div>
      </div>
    )
    
            
    }

}

export default Calculator;