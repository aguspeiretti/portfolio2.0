import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import "./Styles/Styles.scss"
import "./fonts/col.woff"
import "./fonts/hel.otf"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbj3UD2tA7vHi-XXZydAe4aJ-Y0JT-iM4",
  authDomain: "portfolio-34d47.firebaseapp.com",
  projectId: "portfolio-34d47",
  storageBucket: "portfolio-34d47.appspot.com",
  messagingSenderId: "109769705059",
  appId: "1:109769705059:web:b91b0da86cc101fb4eda56",
  measurementId: "G-BL9MW2RRYR",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
