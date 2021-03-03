import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCodeView from 'views/SimpleCode';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SimpleCodeView />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
