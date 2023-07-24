import {Link} from "react-scroll";
import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <nav className='nav-tab'>
            <Link
                to='about-project'
                smooth={true}
                duration={700}
                className='nav-tab__link'>
                <button
                    className='nav-tab__button'
                    type='button'>
                    О проекте
                </button>
            </Link>

            <Link
                to='tech'
                smooth={true}
                duration={700}
                className='nav-tab__link'>
                <button
                    className='nav-tab__button'
                    type='button'>
                    Технологии
                </button>
            </Link>

            <Link
                to='about-me'
                smooth={true}
                duration={700}
                className='nav-tab__link'>
                <button
                    className='nav-tab__button'
                    type='button'>
                    Студент
                </button>
            </Link>
        </nav>
    );
}

export default NavTab;