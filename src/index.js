import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
    <label>
      Enter name:
    </label>
    <input />
    <button style={{backgroundColor: 'blue'}}>Submit</button>
  </div>
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);
