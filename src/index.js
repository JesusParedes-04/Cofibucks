import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0wsZ7r-UqMRSXifL69fNRhfSM-X0D8A8",
    authDomain: "cofishop-ecommerce.firebaseapp.com",
    projectId: "cofishop-ecommerce",
    storageBucket: "cofishop-ecommerce.appspot.com",
    messagingSenderId: "667476900148",
    appId: "1:667476900148:web:aa9b70f4e30c45c3ad4d61"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


