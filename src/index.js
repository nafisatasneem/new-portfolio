import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/nav';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
