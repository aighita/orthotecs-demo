import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AuthProvider from './contexts/AuthContext'; // Import AuthProvider
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
