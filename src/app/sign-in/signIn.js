// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
    const login = document.getElementById("loginbtn");
    login.addEventListener("click", function (event) {
        event.preventDefault();

        const emailput = document.querySelector('#email');
        const email = emailput.value;
        emailput.value = "";

        const passwordput = document.querySelector('#password');
        const password = passwordput.value;
        passwordput.value = "";

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                var user_data = {
                    last_login: Date.now()
                };

                update(ref(database, 'users/' + user.uid), user_data);
                localStorage.setItem('loggedinuser', user.uid);
                alert('Logging in');
                window.location.href = "../home/home.component.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                alert("Incorrect Password or Email. Try again");
            });

    });
});