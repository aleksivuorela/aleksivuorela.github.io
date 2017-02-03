import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes/routes.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));
