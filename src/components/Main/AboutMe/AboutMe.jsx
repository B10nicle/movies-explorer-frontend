import Portfolio from "./Portfolio/Portfolio";
import photo from "../../../images/my-photo.jpeg";
import React from "react";
import "./AboutMe.css";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__description">
                    <h3 className="about-me__name">Олег</h3>
                    <p className="about-me__about">Фронтенд-разработчик, 31 год</p>
                    <p className="about-me__biography">
                        Я живу в Москве, закончил Российский Государственный Гуманитарный Университет по специализации
                        "Юриспруденция". Поработав 8 лет в сфере, я понял что необходимо двигаться дальше,
                        поэтому я решил пройти курс Веб-разработки.
                    </p>
                    <p className="about-me__github-link-container">
                        <a
                            href="https://github.com/B10nicle"
                            className="about-me__github-link"
                            rel="noreferrer"
                            target="_blank">
                            Github
                        </a>
                    </p>
                </div>
                <img className="about-me__photo" src={photo} alt="Фотография Хилько О.И."/>
            </div>
            <Portfolio/>
        </section>
    );
}

export default AboutMe;
