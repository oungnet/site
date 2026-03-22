import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');
if (root) {
    const rootElement = ReactDOM.createRoot(root);
    rootElement.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
