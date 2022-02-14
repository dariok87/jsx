import React from 'react';
import ReactDOM from 'react-dom';

function getButtontext() {
  return 'Click on me';
}
const App = () => {
  return (
    <div>
      <label className="label">
        Enter name:
      </label>
      <input />
      <button style={{backgroundColor: 'blue'}}>{getButtontext()}</button>
    </div>
  );
};

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);
