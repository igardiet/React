import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './useState/CounterApp';
// import { HooksApp } from './HooksApp';
import './index.css';
import { CounterWithCustomHook } from './useState/CounterWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
);
