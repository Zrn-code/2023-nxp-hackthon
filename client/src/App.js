import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';
import { initializeApp as initapp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Importing pages
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))
const Documentation = lazy(() => import('./pages/Documentation'))

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwLs-OZwm62y4OPg2rT51J24fcAygjC8c",
  authDomain: "hackathon-nxp.firebaseapp.com",
  databaseURL: "https://hackathon-nxp-default-rtdb.firebaseio.com",
  projectId: "hackathon-nxp",
  storageBucket: "hackathon-nxp.appspot.com",
  messagingSenderId: "353159235433",
  appId: "1:353159235433:web:01386de67adff818965ff8"
};

// Initialize Firebase
const app = initapp(firebaseConfig);
// Initializing different libraries
initializeApp()
const database = getDatabase(app);

// Check for login and initialize axios
const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documentation" element={<Documentation />} />
          
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />
          {/*
          <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />}/>
          */}
          <Route path="*" element={<Navigate to="/app/welcome"/>}/>
        </Routes>
      </Router>
    </>
  )
}

export {App,database} 
