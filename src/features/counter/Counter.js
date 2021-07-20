import React from 'react';
import { useDispatch } from 'react-redux';
import { getToken, getUsers } from './counterSlice';
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
        console.log("1 base - component - ", loginData.username, loginData.password)
        dispatch(getToken(loginData));

    }

    let clickUsers = () => {
        dispatch(getUsers());
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
                <div><Button variant="contained" onClick={clickUsers}>getUsers</Button></div>
            </div>




            {/* <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
        </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
        </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
        </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
        </button>
            </div> */}
        </div>
    );
}
