import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// import  {Reduceres}  from './redux/reducers/reducerGetUrl';
import thunk from 'redux-thunk';
import GetDataReducer from './redux/reducers/reducerGetUrl';
import reducers from './redux/reducers/reducers';
const root = ReactDOM.createRoot(document.getElementById('root'));


 const store = createStore(reducers,applyMiddleware(thunk))
// const store = createStore(GetDataReducer,applyMiddleware(thunk))


root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
