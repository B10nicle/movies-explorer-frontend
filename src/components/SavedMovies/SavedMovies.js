import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";
import React from "react";

const SavedMovies = ({cards}) => {
    return (
        <main>
            <section className="saved-movies">
                <SearchForm/>
                <MoviesCardList
                    cards={cards}
                    flag="delete-favorites-btn"/>
                <ScrollMoviesBtn cards={cards}/>
            </section>
        </main>
    );
};

export default SavedMovies;
