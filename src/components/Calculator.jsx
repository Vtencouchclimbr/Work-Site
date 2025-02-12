import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumber = (number) => {
    if (waitingForOperand) {
      setDisplay(String(number));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(number) : display + number);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (previousValue == null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 'Error';
      default:
        return current;
    }
  };

  const handleEqual = () => {
    if (!operator || previousValue == null) return;

    const inputValue = parseFloat(display);
    const result = calculate(previousValue, inputValue, operator);
    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="button clear" onClick={handleClear}>C</button>
        <button className="button operator" onClick={() => handleOperator('÷')}>÷</button>
        
        <button className="button number" onClick={() => handleNumber(7)}>7</button>
        <button className="button number" onClick={() => handleNumber(8)}>8</button>
        <button className="button number" onClick={() => handleNumber(9)}>9</button>
        <button className="button operator" onClick={() => handleOperator('×')}>×</button>
        
        <button className="button number" onClick={() => handleNumber(4)}>4</button>
        <button className="button number" onClick={() => handleNumber(5)}>5</button>
        <button className="button number" onClick={() => handleNumber(6)}>6</button>
        <button className="button operator" onClick={() => handleOperator('-')}>-</button>
        
        <button className="button number" onClick={() => handleNumber(1)}>1</button>
        <button className="button number" onClick={() => handleNumber(2)}>2</button>
        <button className="button number" onClick={() => handleNumber(3)}>3</button>
        <button className="button operator" onClick={() => handleOperator('+')}>+</button>
        
        <button className="button number zero" onClick={() => handleNumber(0)}>0</button>
        <button className="button number" onClick={handleDecimal}>.</button>
        <button className="button equals" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;