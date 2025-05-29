import {signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {auth} from "./firebase.js";

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Logged in:", userCredential.user);
      location.href = "welcome.html"; // Redirect to welcome page
    })
    .catch((error) => {
      console.error("Error:", error.code, error.message);
      alert(`Login failed: ${error.message}`);
    });
});
