import styles from '../css/pages/signup.module.css';
import React, { useRef, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../services/authService';
import { displayOneByOne } from '../services/commonService';

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

function Signup() {
    const idRef = useRef(null);
    const nav = useNavigate();
    const loginResult = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    function chnageType(event) {
        const elem = event.target;
        const types = elem.parentElement.getElementsByTagName('span');
        if (elem.innerText === 'Student') {
            idRef.current.innerText = 'Reg No.';
            types[1].classList.remove(styles.activeType);
        } else {
            idRef.current.innerText = 'EMP ID';
            types[0].classList.remove(styles.activeType);
        }
        elem.classList.add(styles.activeType);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser(formData).then((response) => {
            displayOneByOne(response.message, loginResult, 40, "success");
        }).catch((error) => {
            console.error("Signup error:", error);
            displayOneByOne(response.message, loginResult, 40, "failed")
        }
        );
    };
    
    return (
        <React.Fragment>
            <Header />
            <div className={styles.back}></div>
            <div className={styles.main}>
                <div className={styles.glassmorph}>
                    <h4 ref={loginResult}></h4>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.input}>
                            <span>Name</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={animateInputTitle}
                                onBlur={animateInputTitle}
                                required
                            />
                        </div>

                        <div className={styles.input}>
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={animateInputTitle}
                                onBlur={animateInputTitle}
                                required
                            />
                        </div>

                        <div className={styles.input}>
                            <span>Password</span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onFocus={animateInputTitle}
                                onBlur={animateInputTitle}
                                required
                            />
                        </div>

                        <div className={styles.input}>
                            <span>Confirm Password</span>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                onFocus={animateInputTitle}
                                onBlur={animateInputTitle}
                                required
                            />
                        </div>

                        <button type="submit">Signup</button>
                        <p
                            className={styles.link}
                            onClick={() => { nav("/Login"); }}
                        >
                            Have an account?
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Signup;
