import { useEffect } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import NavBar from './NavBar';
import './Login.css';

const Login = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAB8UqHg3lF9_mQa1bgoPF9YCVJfGXfGp4",
        authDomain: "yongama-africa.firebaseapp.com",
        databaseURL: "https://yongama-africa-default-rtdb.firebaseio.com",
        projectId: "yongama-africa",
        storageBucket: "yongama-africa.appspot.com",
        messagingSenderId: "515657059476",
        appId: "1:515657059476:web:4aea1d6a5ba6e92b49f881"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    useEffect(() => {
        const registerForm = document.getElementById('register-form');
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;
            const confirmPassword = document.getElementById("register-confirm-password").value;
            const username = document.getElementById("register-username").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    set(ref(database, 'users/' + user.uid), {
                        username: username,
                        email: email
                    });
                    alert("Registration successful!");
                    registerForm.reset();
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        });

        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            get(ref(database, 'users'))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const users = snapshot.val();
                        const user = Object.values(users).find(u => u.username === username);
                        if (user) {
                            const email = user.email;
                            signInWithEmailAndPassword(auth, email, password)
                                .then((userCredential) => {
                                    alert("Logged in successfully " + user.username);
                                    window.location.href = "../dashboard/dashboard.html";
                                })
                                .catch((error) => {
                                    const errorMessage = error.message;
                                    alert(errorMessage);
                                });
                        } else {
                            alert("User not found. Please check your credentials.");
                        }
                    } else {
                        alert("User not found. Please check your credentials.");
                    }
                })
                .catch((error) => {
                    console.error(error);
                    alert("Error retrieving user data. Please try again later.");
                });
        });
    }, [auth, database]);

    const showRegisterForm = () => {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('forgot-password-form').style.display = 'none';
    };

    const showLoginForm = () => {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('forgot-password-form').style.display = 'none';
    };

    const showForgotPasswordForm = () => {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('forgot-password-form').style.display = 'block';
    };

    const togglePassword = (id) => {
        const passwordField = document.getElementById(id);
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        const button = passwordField.nextElementSibling;
        button.textContent = type === 'password' ? 'Show' : 'Hide';
    };

    const features = ["library", "locator", "symptom tracker"];
    const featuresName = 'Services';

    return (
        <div id="login">
            <NavBar feature={featuresName} features={features} />

            <div className="wrapper" id="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" id="username" placeholder="Username" required />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" id="password" placeholder="Password" required />
                        <i className="bx bxs-lock-open-alt"></i>
                    </div>
                    <div className="rememberForgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#" onClick={showForgotPasswordForm}>Forgot password?</a>
                    </div>
                    <button type="submit" id="loginSubmit" className="btn">Login</button>
                    <div className="registerLink">
                        <p>Don't have an account? <a href="#" onClick={showRegisterForm}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="wrapper" id="registerForm" style={{ display: 'none' }}>
                <form>
                    <h1>Register</h1>
                    <div className="inputBox">
                        <input type="text" id="registerUsername" placeholder="Username" required />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="inputBox">
                        <input type="email" id="registerEmail" placeholder="Email Address" required />
                        <i className="bx bxs-envelope"></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" id="registerpassword" placeholder="Password" required />
                        <i className="bx bxs-lock-open-alt"></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" id="registerConfirmPassword" placeholder="Confirm Password" required />
                        <i className="bx bxs-lock-open-alt"></i>
                    </div>
                    <div className="rememberForgot">
                        <label><input type="checkbox" required />I agree with all terms and conditions</label>
                    </div>
                    <button type="submit" id="registerSubmit" className="btn">Register</button>
                    <div className="loginLink">
                        <p>Already have an account? <a href="#" onClick={showLoginForm}>Login</a></p>
                    </div>
                </form>
            </div>

            <div className="wrapper" id="forgotPasswordForm" style={{ display: 'none' }}>
                <form>
                    <h1>Forgot Password</h1>
                    <div className="inputBox">
                        <input type="email" id="forgotEmail" placeholder="Email Address" required />
                        <i className="bx bxs-envelope"></i>
                    </div>
                    <button type="submit" id="forgotSubmit" className="btn">Submit</button>
                    <div className="loginLink">
                        <p>Remembered your password? <a href="#" onClick={showLoginForm}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
