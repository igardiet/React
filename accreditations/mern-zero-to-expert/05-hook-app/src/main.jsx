import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainApp } from './useContext/MainApp';
import { HomePage } from './useContext/HomePage';
import { AboutPage } from './useContext/AboutPage';
import { LoginPage } from './useContext/LoginPage';
import './index.css';
// import { CounterApp } from './useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
// import { SimpleForm } from './useEffect/SimpleForm';
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks';
// import { FocusScreen } from './useRef/FocusScreen';
// import { Layout } from './useLayoutEffect/Layout';
// import { Memorize } from './memos/Memorize';
// import { MemoHook } from './memos/MemoHook';
// import { CallbackHook } from './memos/CallbackHook';
// import { Parent } from './homework-memo/Parent';
// import './useReducer/intro-reducer';
// import { TodoApp } from './useReducer/TodoApp';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainApp />,
            children:
                [
                    {
                        path: '/',
                        element: <HomePage />
                    },
                    {
                        path: 'about',
                        element: <AboutPage />
                    },
                    {
                        path: 'login',
                        element: <LoginPage />
                    },
                    {
                        path: '*',
                        element: <Navigate to='/' replace />
                    },
                ]
        }
    ]
);

ReactDOM.createRoot( document.getElementById( 'root' ) ).render
    (
        <RouterProvider router={router} />
    );