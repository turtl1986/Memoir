import { Link,NavLink } from "react-router-dom";
import style from './nav.module.css'
import logo from '../../assets/logos/logo.svg'

export function Nav(){

    return(
        <nav className={style.nav}>
            <Link to="/" className={style.nav__link}>
                <img src={logo} alt="" className={style.nav__logo} />
                <h1 className={style.nav__title}>Memoir</h1>
            </Link>
            <ul className={style.nav__list}>
                <NavLink className={style.nav__navlink} to={'/dashboard'}>Панель управления</NavLink>
                <NavLink className={style.nav__navlink} to={'/allNotes'}>Все задачи</NavLink>
                <NavLink className={style.nav__navlink} to={'/calendar'}>Календарь</NavLink>
                <NavLink className={style.nav__navlink} to={'/statistics'}>Статистика</NavLink>
                <NavLink className={style.nav__navlink} to={'/favorite'}>Фавориты</NavLink>
                <NavLink className={style.nav__navlink} to={'/tags'}>Тэги</NavLink>
            </ul>
            <ul className={style.nav__list}>
                <NavLink className={style.nav__navlink} to={'/settings'}>Настройки</NavLink>
                <NavLink className={style.nav__navlink} to={'/help'}>Поддержка</NavLink>
            </ul>
            <ul className={style.nav__list}>
                <li className={style.nav__navlink}>Светлый режим</li>
                <li className={style.nav__navlink}>Кабинет</li>
            </ul>
        </nav>
    )
}