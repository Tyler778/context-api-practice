import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Context API
import {Provider} from './Context API/context.js'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
, 
document.getElementById('root'));


serviceWorker.unregister();
