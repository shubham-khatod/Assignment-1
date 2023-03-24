import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  const num1Changehandler = event => {
    setNumber1(event.target.value);
  }

  const num2Changehandler = event => {
    setNumber2(event.target.value);
  }

  const addClickHandler = () => {
    if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2))) {
      alert('Enter valid number');
    }
    else {
      setResult((parseFloat(number1) + parseFloat(number2)).toFixed(2));
      setOperator("+");
    }
  }

  const subtractClickHandler = () => {
    if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2))) {
      alert('Enter valid number');
    }
    else {
      setResult((parseFloat(number1) - parseFloat(number2)).toFixed(2));
      setOperator("-");
    }
  }

  const multiplyClickHandler = () => {
    if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2))) {
      alert('Enter valid number');
    }
    else {
      setResult((parseFloat(number1) * parseFloat(number2)).toFixed(2));
      setOperator("*");
    }
  }

  const divideClickHandler = () => {
    if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2))) {
      alert('Enter valid number');
    }
    else {
      setResult((parseFloat(number1) / parseFloat(number2)).toFixed(4));
      setOperator("/");
    }
  }

  return (
    <div className='calci'>
      <label htmlFor='num1' >Number 1 : </label>
      <br />
      <input type={'text'} id='num1' value={number1} onChange={num1Changehandler} ></input>
      <br />
      <p id='operator'>{operator}</p>
      <label htmlFor='num2'>Number 2 : </label>
      <br />
      <input type={'text'} id='num2' value={number2} onChange={num2Changehandler} ></input>
      <br />
      <br />
      <label >Result : </label>
      <br />
      <p id='result'>{result}</p>
      <br />
      <input type={'button'} value='Addition' onClick={addClickHandler} />
      <input type={'button'} value='Subtraction' onClick={subtractClickHandler} />
      <br />
      <input type={'button'} value='Multiplication' onClick={multiplyClickHandler} />
      <input type={'button'} value='Division' onClick={divideClickHandler} />
    </div>
  );
}

export default App;
