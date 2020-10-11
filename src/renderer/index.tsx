import React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';

document.title = 'electron-webpack-obfuscation';

const App = () => {
  return <h1>Hello world from React!</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));
