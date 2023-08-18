import Authorization from "../Authorization/Authorization";
import {Navigate} from "react-router-dom";
import React from "react";

function Login(props) {
    return (!props.auth
            ? <main>
                <Authorization
                    onLogin={props.onLogin}
                    text="Ещё не зарегистрированы?"
                    title="Рады видеть!"
                    link="Регистрация"
                    linkRout="/signup"
                    authType="login"
                    button="Войти"
                />
            </main>
            : (<Navigate to="/movies"/>)
    );
}

export default Login;
