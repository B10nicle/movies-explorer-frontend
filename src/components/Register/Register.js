import Authorization from "../Authorization/Authorization";
import React from "react";

function Register() {
    return (
        <main>
            <Authorization
                authType="register"
                title="Добро пожаловать!"
                button="Зарегистрироваться"
                text="Уже зарегистрированы?"
                link="Войти"
                linkRout="/signin"
                name={["name", "email", "password"]}
            />
        </main>
    );
}

export default Register;
