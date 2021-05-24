import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./app/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* Aca le estamos dando acceso a app a todo el store */}
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
