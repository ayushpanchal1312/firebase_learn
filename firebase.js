import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCU3uxo0O78zqWymobmuRTW3K_DRWUZjkI",
  authDomain: "fir-learn-13ed1.firebaseapp.com",
  projectId: "fir-learn-13ed1",
  storageBucket: "fir-learn-13ed1.firebasestorage.app",
  messagingSenderId: "118359832162",
  appId: "1:118359832162:web:e810f28b1a6aa9fad1833b",
  measurementId: "G-4Y8JSWG60K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
