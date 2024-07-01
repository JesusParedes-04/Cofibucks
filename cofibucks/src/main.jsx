import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC0wsZ7r-UqMRSXifL69fNRhfSM-X0D8A8",
    authDomain: "cofishop-ecommerce.firebaseapp.com",
    projectId: "cofishop-ecommerce",
    storageBucket: "cofishop-ecommerce.appspot.com",
    messagingSenderId: "667476900148",
    appId: "1:667476900148:web:aa9b70f4e30c45c3ad4d61"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
