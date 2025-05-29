import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
      import {
        getAuth,
      } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

      const firebaseConfig = {
        apiKey: "AIzaSyCU3uxo0O78zqWymobmuRTW3K_DRWUZjkI",
        authDomain: "fir-learn-13ed1.firebaseapp.com",
        projectId: "fir-learn-13ed1",
        storageBucket: "fir-learn-13ed1.firebasestorage.app",
        messagingSenderId: "118359832162",
        appId: "1:118359832162:web:e810f28b1a6aa9fad1833b",
        measurementId: "G-4Y8JSWG60K",
      };

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      export { auth };
