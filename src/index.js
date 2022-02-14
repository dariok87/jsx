import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = 'Click me'

  return <div>
    <label className="label">
      Enter name:
    </label>
    <input />
    <button style={{backgroundColor: 'blue'}}>{buttonText}</button>
  </div>
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);
