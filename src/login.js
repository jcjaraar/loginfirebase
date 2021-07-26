import React from "react";

const login = (props) => {

    const {
        email,
        SetEmail,
        password,
        SetPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>UserName</label>
                <input
                    type="text"
                    autoFocus="autoFocus"
                    required="required"
                    value={email}
                    onChange={e => SetEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input
                    type="password"
                    required="required"
                    value={password}
                    onChange={e => SetPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {hasAccount}{
                        <> < button onClick = {
                            handleLogin
                        } > Sign in</button> < p > Don´t have an account
                            ? <span onClick={() => setHasAccount(hasAccount)}>Sign up</span>
                            </p>
                        </>
                    }
                    : {
                        <> < button onClick = {
                            handleSignup
                        } > Sign up</button> < p > Have an account
                            ? <span onClick={() => setHasAccount(hasAccount)}>Sign in</span>
                            </p>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default login;