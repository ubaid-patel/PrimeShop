import styles from '../css/pages/login.module.css'
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { displayOneByOne } from '../services/commonService';
import { useRef } from 'react';

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

function Login() {
    const nav = useNavigate();
     const result = useRef(null);
    return (
        <React.Fragment>
            <Header />
            <div className={styles.back}></div>
            <div className={styles.main}>
                <div className={styles.glassmorph}>
                      <h4 ref={result}></h4>
                    <form className={styles.form} onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        loginUser(formData.get('userId'), formData.get('password')).then((response) => {
                            displayOneByOne(response.message, result, 40, "success");
                            setTimeout(() => { nav("/");  }, 2000);
                        }).catch((error) => {
                            console.error("Signup error:", error);
                            displayOneByOne(response.message, result, 40, "failed")
                        }
                        );
                    }}>
                        <div className={styles.input}>
                            <span>Email</span>
                            <input type="email" name="userId" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                        </div>
                        <div className={styles.input}>
                            <span>Password</span>
                            <input type="password" name='password' onFocus={animateInputTitle} onBlur={animateInputTitle} />
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