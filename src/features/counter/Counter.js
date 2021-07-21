import React from 'react';
import { useDispatch } from 'react-redux';
import { getToken } from './counterSlice';
import { Button, TextField } from '@material-ui/core';
import styles from './Counter.module.css';

export function Counter() {

    const dispatch = useDispatch();
    let loginText = "";
    let passwordText = "";

    let clickLogin = () => {
        const loginData = {
            // username:loginText,
            // password:passwordText
            username: "test_super",
            password: "Nf<U4f<rDbtDxAPn"
        }
        dispatch(getToken(loginData));
    }

    let handleOnChange = (e) => {
        const text = e.target.value;
        if (e.target.name === "loginText") {
            loginText = text;
        } else { passwordText = text }
    }
    return (
        <div>
            <div className={styles.wrapper}>
                Login Page
                <div><TextField name="loginText" className="login" required label="Login" variant="outlined" onChange={handleOnChange} /></div>
                <div><TextField name="passwordText" required label="Password" variant="outlined" type="password" onChange={handleOnChange} /></div>
                <div><Button variant="contained" onClick={clickLogin}>Login init </Button></div>
            </div>
        </div>
    );
}
