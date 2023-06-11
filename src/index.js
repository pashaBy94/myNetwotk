import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppFull from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

function renderPage() {
    root.render(<AppFull />);
}

renderPage();
