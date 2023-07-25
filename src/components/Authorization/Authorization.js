import Logo from "../Header/Logo/Logo";
import "./Authorization.css";
import React from "react";

function Authorization(props) {
    return (
        <section className='authorization'>
            <div className='authorization__header'>
                <div className='authorization__header-container'>
                    <div className='authorization__logo-container'>
                        <Logo/>
                    </div>
                    <h1 className='authorization__text'>{props.title}</h1>
                </div>
            </div>
            <form name={props.authType}>
                <ul className='authorization__container'>
                    {props.authType === 'register' && (
                        <li className='authorization__part-form'>
                            <p className='authorization__name'>Имя</p>
                            <input
                                className='authorization__input'
                                placeholder='Имя'
                                type="text"
                                id="name"
                                name="name"
                                minLength="2"
                                maxLength="30"
                                required/>
                        </li>)}
                    {props.authType === 'register' && (
                        <li className='authorization__validation-text'>Что-то пошло не так...</li>
                    )}
                    <li className='authorization__part-form'>
                        <p className='authorization__name'>E-mail</p>
                        <input
                            className='authorization__input'
                            placeholder='E-mail'
                            type="email"
                            id="email"
                            name="email"
                            minLength="2"
                            maxLength="30"
                            required/>
                    </li>
                    <li className='authorization__validation-text'>Что-то пошло не так...</li>
                    <li className='authorization__part-form'>
                        <p className='authorization__name'>Пароль</p>
                        <input
                            className='authorization__input'
                            placeholder='Пароль'
                            type='password'
                            id="password"
                            name="password"
                            minLength="2"
                            maxLength="30"
                            required/>
                    </li>
                    <li className='authorization__validation-text'>Что-то пошло не так...</li>
                </ul>
            </form>
            <div className='authorization__confirm'>
                <button
                    className={`${props.authType === 'register'
                        ? 'authorization__confirm-button'
                        : 'authorization__confirm-button authorization__confirm-button-login'}`}
                    type='submit'>{props.button}</button>
                <div className='authorization__confirm-container'>
                    <p className='authorization__confirm-text'>{props.text}</p>
                    <a className='authorization__confirm-link' href={props.linkRout}>{props.link}</a>
                </div>
            </div>
        </section>
    );
}

export default Authorization;