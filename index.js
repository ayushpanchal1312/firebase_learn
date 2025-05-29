import {signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {createUserWithEmailAndPassword ,} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

import {auth} from "./firebase.js";

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      location.href = "welcome.html"; // Redirect to welcome page
    })
    .catch((error) => {
      document.getElementById("error").innerHTML =error.message;
    });
});

document.getElementById('Signupbtn').addEventListener('click',(e)=>{
  e.preventDefault();
   const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    location.href = "welcome.html"; // Redirect to welcome page
  })
  .catch((error) => {
    document.getElementById("error").innerHTML = error.message;
  });
})
