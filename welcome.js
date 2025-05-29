import { auth } from "./firebase.js";
import {onAuthStateChanged ,signOut} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";



onAuthStateChanged(auth,(user) => {
  if (user) {
    document.getElementById("userEmail").textContent = user.email;
  } else {
    window.location.href = "index.html";
  }
});

// Logout button handler
document.getElementById("logoutBtn").addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "index.html";
      }).catch((error) => {
        alert("Logout failed: " + error.message);
      });
    });