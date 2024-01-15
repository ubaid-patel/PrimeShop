import styles from '../css/pages/login.module.css'
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useNavigate } from 'react-router-dom';

function animateInputTitle(event) {
    const elem = event.target.parentElement.getElementsByTagName('span')[0];
    const input = event.target;
    if (event.type === 'focus') {
        elem.classList.add(styles.moveup);
    } else {
        if (input.value.trim() === '') {
            elem.classList.remove(styles.moveup);
        }
    }
}

function loginUser() {
    // WARNING: For POST requests, body is set to null by browsers.
    var data = JSON.stringify({
        "email": "fakeuser595@gmail.com",
        "password": "ubaid"
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:3000/users/login");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}

function Login() {
    const nav = useNavigate();
    function loginUser(event) {
        event.preventDefault();
        nav("/Dashboard")
    }
    return (
        <React.Fragment>
            <Header />
            <div className={styles.back}></div>
            <div className={styles.main}>
                <div className={styles.glassmorph}>
                    <form className={styles.form} onSubmit={loginUser}>
                        <div className={styles.input}>
                            <span>Email</span>
                            <input type="aaemailas" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                        </div>
                        <div className={styles.input}>
                            <span>Password</span>
                            <input type="Passwordaa" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                            <p className={styles.forgot} onClick={() => nav("/Forgot")}>Forgot?</p>
                        </div>
                        <button type="submit">Login</button>
                        <p className={styles.link} onClick={() => nav("/Signup")}>Don't have account?</p>
                    </form >
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Login;