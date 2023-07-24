import Authorization from "../Authorization/Authorization";
import React from "react";

function Login() {
    return (
        <main>
            <Authorization
                authType="login"
                title="Рады видеть!"
                button="Войти"
                text="Ещё не зарегистрированы?"
                link="Регистрация"
                linkRout="/signup"
            />
        </main>
    );
}

export default Login;
