import {CurrentUserContext} from "../../context/CurrentUserContext";
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import SavedMovies from "../SavedMovies/SavedMovies";
import {moviesCards} from "../../utils/moviesCards";
import {savedMovies} from "../../utils/moviesCards";
import {Route, Routes} from "react-router-dom";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import React, {useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Main from "../Main/Main";
import "./App.css";

function App() {
    const [currentUser] = useState(null);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Header auth={false}/>
                                <Main/>
                                <Footer/>
                            </>
                        }
                    />
                    <Route
                        exact
                        path="/profile"
                        element={
                            <>
                                <Header auth={true}/>
                                <Profile/>
                            </>
                        }
                    />
                    <Route
                        exact
                        path="/movies"
                        element={
                            <>
                                <Header auth={true}/>
                                <Movies cards={moviesCards}/>
                                <Footer/>
                            </>
                        }
                    />
                    <Route
                        exact
                        path="/saved-movies"
                        element={
                            <>
                                <Header auth={true}/>
                                <SavedMovies cards={savedMovies}/>
                                <Footer/>
                            </>
                        }
                    />
                    <Route exact path="/*" element={<NotFoundPage/>}/>
                    <Route exact path="/signup" element={<Register/>}/>
                    <Route exact path="/signin" element={<Login/>}/>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
