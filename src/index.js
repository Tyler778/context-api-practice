import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Context API
import {ProductProvider} from './Context API/context.js'

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>
, 
document.getElementById('root'));


serviceWorker.unregister();
