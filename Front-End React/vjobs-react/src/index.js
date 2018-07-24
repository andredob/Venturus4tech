import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8080'; //define a url base dele antes de tudo que é a url do servidor

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
