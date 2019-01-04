import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App message="Hello Kaleem!"/>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
