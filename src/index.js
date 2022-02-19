import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import config from './config.js';
import './tailwind.output.css';


ReactDOM.render(<App {...config} />, document.getElementById('root'));

