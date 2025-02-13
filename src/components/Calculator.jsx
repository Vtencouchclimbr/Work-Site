import { useState, useEffect } from 'react';
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

  // Handle keyboard input
  const handleKeyPress = (event) => {
    const { key } = event;

    // Numbers (0-9)
    if (/[0-9]/.test(key)) {
      handleNumber(parseInt(key, 10));
    }
    // Operators
    else if (key === '+') {
      handleOperator('+');
    } else if (key === '-') {
      handleOperator('-');
    } else if (key === '*') {
      handleOperator('×');
    } else if (key === '/') {
      handleOperator('÷');
    }
    // Decimal point
    else if (key === '.') {
      handleDecimal();
    }
    // Equals
    else if (key === '=' || key === 'Enter') {
      handleEqual();
    }
    // Clear (Escape or Backspace)
    else if (key === 'Escape' || key === 'Backspace') {
      handleClear();
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [display, operator, previousValue, waitingForOperand]); // Dependencies to ensure state updates are reflected

  return (
    <div className="calculator" tabIndex={0}> {/* Add tabIndex for focus */}
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