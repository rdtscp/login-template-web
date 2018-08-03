import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles.css';
import 'materialize-css/dist/css/materialize.min.css'

document.title = "Login Template App";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
