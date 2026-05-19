import style from './header.module.css'

export function Header() {

    return (
        <header className={style.header}>
            <article className={style.header__greeting}>
                <p className={style.header__title}>
                    Добрый день, User
                </p>
                <p className={style.header__subtitle}>
                    Делай каждый день что-нибудь, что тебя пугает
                </p>
            </article>

            <article className={style.header__actions}>
                <form className={style.header__search}>
                    <input className={style.header__input} placeholder="Поиск задачи"/>
                    <button className={style.header__searchButton}>Поиск</button>
                </form>
                <button className={style.header__notificationButton}> Уведомление</button>
                <button className={style.header__createButton}>Новая задача</button>
            </article>
        </header>
    )

}