import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </Provider>, 
    document.getElementById('root')
);


serviceWorker.unregister();