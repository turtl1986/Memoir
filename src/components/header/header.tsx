import style from './header.module.css'
import * as React from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

interface IAdvice {
    id: number,
    advice: string
}


export function Header() {

    const [notes, setNotes] = React.useState<IAdvice | null>(null)
    const [search, setSearch] = React.useState('')
    const [headerMain, setHeaderMain] = React.useState(true)
    const navigate=useNavigate()

    const getNotesDay = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => setNotes(data.slip))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getNotesDay()
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert(search)
    }

    const handleAddNote = () => {
        setHeaderMain(prev => !prev)
        navigate(`/add`)
    }

    return (
        <header className={style["header"]}>
            {
                headerMain ? (
                    <>
                        <article className={style["header__greeting"]}>
                            <p className={style["header__title"]}>Добрый день, User</p>
                            <p className={style["header__subtitle"]}>{notes?.advice}</p>
                        </article>

                        <article className={style["header__actions"]}>
                            <form className={style["header__search"]} onSubmit={handleSubmit}>
                                <input value={search}
                                       onChange={(event) => setSearch(event.target.value)}
                                       name="search"
                                       className={style["header__input"]}
                                       placeholder="Поиск задачи"/>
                                {search.length > 0 &&
                                    (<button type='reset'
                                             className={style["header__resetButton"]}
                                             onClick={() => setSearch('')}
                                    />)}
                                <button type='submit' className={style["header__searchButton"]}/>
                            </form>
                            <button className={style["header__createButton"]}
                                    onClick={handleAddNote}>
                                Новая задача
                            </button>
                        </article>
                    </>

                ) : (

                    <>
                        <div className={style["header__top"]}>
                            <button className={style["header__backButton"]}
                                    onClick={() => setHeaderMain(prev => !prev)}/>
                            <div className={style["header__greeting"]}>
                                <h1 className={style["header__title"]}>Создание заметки</h1>
                                <p className={style["header__subtitle"]}>
                                    Запишите свои мысли, чувства и важные моменты.
                                </p>
                            </div>

                        </div>
                        <button className={style["header__saveButton"]}>Сохранить заметку</button>
                    </>

                )
            }
        </header>
    )
}