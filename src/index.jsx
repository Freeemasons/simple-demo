import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme } from "./common/theme"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Theme>
      <App />
    </Theme>

);


reportWebVitals();
