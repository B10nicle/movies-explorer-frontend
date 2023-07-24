import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <section className='tech'>
            <h2 className='tech__title'>Технологии</h2>
            <h3 className='tech__description-title'>7 технологий</h3>
            <p className='tech__description'>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <nav className='tech__navigation'>
                <a
                    href='https://ru.wikipedia.org/wiki/HTML'
                    className='tech__link'
                    rel="noreferrer"
                    target="_blank">
                    <button
                        className='tech__button'
                        type='button'>
                        HTML
                    </button>
                </a>
                <a
                    href='https://ru.wikipedia.org/wiki/CSS'
                    className='tech__link'
                    rel="noreferrer"
                    target="_blank">
                    <button
                        className='tech__button'
                        type='button'>
                        CSS
                    </button>
                </a>
                <a
                    href='https://www.javascript.com/'
                    className='tech__link'
                    rel="noreferrer"
                    target="_blank">
                    <button
                        className='tech__button'
                        type='button'>
                        JS
                    </button>
                </a>
                <a
                    href='https://reactjs.org/'
                    className='tech__link'
                    rel="noreferrer"
                    target="_blank">
                    <button
                        className='tech__button'
                        type='button'>
                        React
                    </button>
                </a>
                <a
                    href='https://git-scm.com/'
                    className='tech__link'
                    rel="noreferrer"
                    target="_blank">
                    <button
                        className='tech__button'
                        type='button'>
                        Git
                    </button>
                </a>
                <a
                    href='https://expressjs.com/ru/'
                    className='tech__link'
                    rel="noreferrer"
                    target="_blank">
                    <button
                        className='tech__button'
                        type='button'>
                        Express.js
                    </button>
                </a>
                <a
                    href='https://www.mongodb.com/'
                    className='tech__link'
                    rel="noreferrer"
                    target="_blank">
                    <button
                        className='tech__button'
                        type='button'>
                        mongoDB
                    </button>
                </a>
            </nav>
        </section>
    );
}

export default Techs;