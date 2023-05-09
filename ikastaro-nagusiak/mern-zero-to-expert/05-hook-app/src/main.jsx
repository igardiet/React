import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
// import { SimpleForm } from './useEffect/SimpleForm';
import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormWithCustomHook />
);
