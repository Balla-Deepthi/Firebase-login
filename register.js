// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYu_8T57g2nqCI4uhAfbuqE_resNuMYro",
  authDomain: "login-register-2ee27.firebaseapp.com",
  projectId: "login-register-2ee27",
  storageBucket: "login-register-2ee27.firebasestorage.app",
  messagingSenderId: "901268450392",
  appId: "1:901268450392:web:1db0ed20cffee6f7e86e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();

const submit=document.getElementById("Signup")
submit.addEventListener("click",function(event)
{
    event.preventDefault()
    const email=document.getElementById("remail").value
const password=document.getElementById("rpassword").value
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account registered successfully")
    window.location.href="./login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})
const forget = document.getElementById("forget");
forget.addEventListener("click", function(event) {
    event.preventDefault();  // Prevents the form from submitting

    const email = document.getElementById("remail").value;

    

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent! Check your inbox.");
        })
        .catch((error) => {
            alert(error.message);
            console.error("Error:", error.code, error.message);
        });
});

