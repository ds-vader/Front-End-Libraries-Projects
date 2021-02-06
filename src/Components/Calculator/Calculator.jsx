import React from 'react'
import './Calculator.css'

const Calculator = (props) => {

    return (
        <main >
        <div className="calculator">
            <div className="formulaScreen">{props.formula}</div>
            <div className="input" id="display">{props.currentValue}</div>
            <div className="buttons">
                <div className="operators">
                    <button id='add' value='+' onClick={props.operators}>+</button>
                    <button id='subtract' value='-' onClick={props.operators}>-</button>
                    <button id="multiply" value='*' onClick={props.operators}>&times;</button>
                    <button id="divide" value='/' onClick={props.operators}>&divide;</button>
                </div>
                <div className="leftPanel">
                    <div className="numbers">
                        <button id='seven' value='7' onClick={props.numbers}>7</button>
                        <button id='eight' value='8' onClick={props.numbers}>8</button>
                        <button id='nine' value='9' onClick={props.numbers}>9</button>
                    </div>
                    <div className="numbers">
                        <button id='four' value='4' onClick={props.numbers}>4</button>
                        <button id='five' value='5' onClick={props.numbers}>5</button>
                        <button id='six' value='6' onClick={props.numbers}>6</button>
                    </div>
                    <div className="numbers">
                        <button id='one' value='1' onClick={props.numbers}> 1</button>
                        <button id='two' value='2' onClick={props.numbers}>2 </button>
                        <button id='three' value='3' onClick={props.numbers}>3</button>
                    </div>
                    <div className="numbers">
                        <button id='zero' value='0' onClick={props.numbers}>0</button>
                        <button id='decimal' value='.' onClick={props.decimal}>.</button>
                        <button id="clear" onClick={props.initialize} value='C'>C</button>
                    </div>
                </div>
                <button className="equal" id="equals" value='=' onClick={props.evaluate}>=</button>
            </div>
        </div>
    </main>
    )
}

export default Calculator