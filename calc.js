import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number) => {
    if (display === '0' || operator) {
      setDisplay(number);
      setCurrentNumber(number);
      setOperator('');
    } else {
      setDisplay(display + number);
      setCurrentNumber(currentNumber + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentNumber && !operator) {
      setPreviousNumber(currentNumber);
      setOperator(op);
      setDisplay(op);
      setCurrentNumber('');
    }
  };

  const handleEqualClick = () => {
    if (currentNumber && previousNumber && operator) {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
          break;
        case '-':
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
          break;
        case 'x':
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
          break;
        case '/':
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
          break;
        default:
          return;
      }
      setDisplay(result.toString());
      setCurrentNumber(result.toString());
      setPreviousNumber('');
      setOperator('');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentNumber('');
    setPreviousNumber('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('x')}>x</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
