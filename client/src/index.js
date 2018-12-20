import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/ScrollToTop';
import SearchProvider from './providers/SearchProvider';

ReactDOM.render(
    <Provider store={Store}>
        <SearchProvider>
            <Router>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </Router>
        </SearchProvider>
    </Provider>, 
    document.getElementById('root')
);


serviceWorker.unregister();