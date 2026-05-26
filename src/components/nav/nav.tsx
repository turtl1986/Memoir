import {Link, NavLink} from "react-router-dom";
import style from './nav.module.css'
import * as React from "react";

export function Nav() {

    const [theme, setTheme] = React.useState('sun')

    return (
        <nav className={style.nav}>
            <div className={style.nav__cover}>
                <Link to="/" className={`${style.nav__navlink} ${style.nav__navlink_title}`}>
                    Memoir
                </Link>
                <ul className={style.nav__list}>
                    <NavLink className={`${style.nav__navlink}`} to={'/dashboard'}>Панель
                        управления</NavLink>
                    <NavLink className={`${style.nav__navlink}`} to={'/allNotes'}>Все
                        заметки</NavLink>
                    <NavLink className={`${style.nav__navlink}`} to={'/tags'}>Тэги</NavLink>
                </ul>
            </div>

            <div className={style.nav__themeCover}>
                <p className={`${style.nav__themeName} ${style[`nav__themeName_${theme}`]}`}>
                    {theme === 'sun' ? "Светлая тема" : "Темная тема"}</p>
                <button className={`${style["nav__themeButton"]} ${style[`nav__themeButton_${theme}`]}`}
                        onClick={() => theme === 'sun' ? setTheme('moon') : setTheme('sun')}/>
            </div>

        </nav>
    )
}