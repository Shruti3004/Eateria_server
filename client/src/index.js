import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context';
import { AuthProvider} from './Auth';

ReactDOM.render(
<AuthProvider>
    <ProductProvider>
        <Router>
            <App/>
        </Router>
    </ProductProvider>
</AuthProvider>, document.querySelector('#root'));