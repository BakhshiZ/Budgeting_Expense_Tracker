import React from 'react';
import ReactDOM from 'react-dom/client';
import { WinSizeProvider } from './contexts/width-height';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <WinSizeProvider>
            <App />
        </WinSizeProvider>
    </React.StrictMode>
);
