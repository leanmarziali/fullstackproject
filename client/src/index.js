import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  configureStore from './configureStore';

import './index.css';
import App from './App';

// Single redux store for whole application
const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
        );
};
      
render(App);

// Unregister the service worker
serviceWorker.unregister();