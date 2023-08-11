import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

const globalState = {
  totalOrder: 0
}

const rootReducer = (state = globalState, action)   => {
  if (action.type === 'PLUS_ORDER') {
    return {
      ...state,
      totalOrder: state.totalOrder + 1
    }
  }
  if (action.type === 'MINUS_ORDER') {
    let totalOrder = 0
    if (state.totalOrder > 0) {
        totalOrder= state.totalOrder - 1
      }
      return {
        ...state,
        totalOrder: totalOrder
    }
  }
  
  return state
}
const storeRedux =  createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <App />   
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
