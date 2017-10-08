import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

const root = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    root);
registerServiceWorker();
