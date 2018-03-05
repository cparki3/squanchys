import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import Products from './components/Products';
import QuickView from './components/QuickView';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
