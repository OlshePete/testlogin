import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUsers, setFetching } from './counterSlice';
import { Button, TextField } from '@material-ui/core';
import styles from './Counter.module.css';

export function Counter() {
    const dispatch = useDispatch();
    let loginText = "";
    let passwordText = "";

    let clickLogin = () => {

        console.log("You")
        const loginData = {
            // username:loginText,
            // password:passwordText
            username: "test_super",
            password: "Nf<U4f<rDbtDxAPn"
        }
        dispatch(getToken(loginData)).then(dispatch(getUsers()).then(dispatch(setFetching())));
    }
    let handleOnChange = (e) => {
        const text = e.target.value;
        if (e.target.name === "loginText") {
            loginText = text;
        } else { passwordText = text }
    }

    return (
        <div className={styles.content}>
              <h1> Login Page</h1> 
            <div className={styles.wrapper}>
                <div><TextField name="loginText" className="login" required label="Login" variant="outlined" onChange={handleOnChange} /></div>
                <div><TextField name="passwordText" required label="Password" variant="outlined" type="password" onChange={handleOnChange} /></div>
                <div><Button variant="contained" onClick={clickLogin}>Login init </Button></div>
            </div>
        </div>
    );
}
