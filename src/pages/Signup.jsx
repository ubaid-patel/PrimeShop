import styles from '../css/pages/signup.module.css'
import React, { useRef } from 'react';
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

function Signup() {
    const idRef = useRef(null);
    const nav = useNavigate();

    function chnageType(event) {
        const elem = event.target;
        const types = elem.parentElement.getElementsByTagName('span');
        if (elem.innerText === 'Student') {
            idRef.current.innerText = 'Reg No.'
            types[1].classList.remove(styles.activeType)
        } else {
            idRef.current.innerText = 'EMP ID'
            types[0].classList.remove(styles.activeType)
        }
        elem.classList.add(styles.activeType)
    }

    return (
        <React.Fragment>
            <Header />
            <div className={styles.back}></div>
                <div className={styles.main}>
                    <div className={styles.glassmorph}>
                        <form className={styles.form}>

                            <div className={styles.input}>
                                <span>Name</span>
                                <input type="aaemailas" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                            </div>
                            <div className={styles.input}>
                                <span>Email</span>
                                <input type="aaemailas" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                            </div>
                            <div className={styles.input}>
                                <span>OTP</span>
                                <button type="" className={styles.resend}>Resend</button>
                                <input type="aaemailas" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                            </div>
                            <div className={styles.input}>
                                <span>Password</span>
                                <input type="aaemailas" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                            </div>
                            <div className={styles.input}>
                                <span>Confirm Password</span>
                                <input type="Passwordaa" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                            </div>
                            <button type="submit">Signup</button>
                            <p className={styles.link} onClick={() => { nav("/Login") }}>Have an account?</p>
                        </form >
                    </div>
                </div>
            <Footer />
        </React.Fragment>
    )
}
export default Signup;