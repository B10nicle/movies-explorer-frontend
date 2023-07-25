import search from "../../../images/search-button.svg";
import searchBtn from "../../../images/search__button-btn.svg";
import React from "react";
import "./SearchForm.css";

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <img
                        className="search__search-image search__search-image-none"
                        src={search}
                        alt="поиск"
                    />
                    <input
                        className="search__input"
                        placeholder="Фильм"
                        type="text"
                        minLength="2"
                        maxLength="30"
                        required
                    />
                    <button
                        type="submit"
                        className="search__button">
                        <img
                            className="search__search-image"
                            src={searchBtn}
                            alt="поиск"
                        />
                    </button>
                    <div className="search__border"/>
                    <div className="search__toggle">
                        <label className="search__tumbler">
                            <input
                                type="checkbox"
                                className="search__checkbox"
                            />
                            <span className="search__slider"/>
                        </label>
                        <p className="search__films">Короткометражки</p>
                    </div>
                </div>
                <div className="search__toggle search__toggle_mini-size">
                    <label className="search__tumbler">
                        <input
                            type="checkbox"
                            className="search__checkbox"
                        />
                        <span className="search__slider"/>
                    </label>
                    <p className="search__films">Короткометражки</p>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;
