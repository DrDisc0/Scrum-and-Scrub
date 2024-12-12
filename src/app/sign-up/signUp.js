// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQdzC6wreTrq2vlrJaOGXXb_RP2kKsAq4",
    authDomain: "login-database-11a16.firebaseapp.com",
    databaseURL: "https://login-database-11a16-default-rtdb.firebaseio.com",
    projectId: "login-database-11a16",
    storageBucket: "login-database-11a16.firebasestorage.app",
    messagingSenderId: "383595193136",
    appId: "1:383595193136:web:769263fc4a26858f555ef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

document.addEventListener("DOMContentLoaded", function () {
    const signbtn = document.getElementById("signupBtn");
    signbtn.addEventListener("click", function (event) {
        event.preventDefault();
        const emailput = document.querySelector('#email');
        const email = emailput.value;
        emailput.value = "";

        const usernameput = document.querySelector('#fullName');
        const username = usernameput.value;
        usernameput.value = "";

        const passwordput = document.querySelector('#password');
        const password = passwordput.value;
        passwordput.value = "";

        console.log(email);
        console.log(username);
        console.log(password);

        createUserWithEmailAndPassword(auth, email, password)
            .then(function (userCredential) {
                var user = userCredential.user;

                var user_data = {
                    email: email,
                    username: username,
                    last_login: Date.now()
                };

                set(ref(database, 'users/' + user.uid), user_data); // Add user data to the database (using Firebase Realtime Database)
                alert('Account Created');
                window.location.href = "../sign-in/sign-in.component.html";

            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    });
});

