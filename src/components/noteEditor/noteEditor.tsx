import style from "./noteEditor.module.css"
import {useState} from "react";
import {Mood} from "../../mocks/moods.tsx";
import * as React from "react";
import type {IPost} from "../../types/post.tsx";


export function NoteEditor() {
    const [formState, setFormState] = useState<IPost | null>(null)
    const [active, setActive] = useState(false);

    const updateFormField = (fields: Partial<IFormState>) => {
        setFormState(prev => ({...prev, ...fields}));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("here", formState);
        if(formState?.title && formState?.note){
            console.log("here", formState);
        }

    }

    const renderEmotionCards=()=>{
        return Mood.map(item => {
            return (
                <button
                    className={`${style['note-editor__mood-button']} 
                                                ${active ?? style['note-editor__mood-button--active']}`}
                    key={item.id}
                    onClick={() => {
                        setActive((prev) => !prev)
                        updateFormField({"mood": item.id})
                    }}>
                    <p className={style['note-editor__mood-emoji']}>{item.emoji}</p>
                    <p className={style['note-editor__mood-name']}>{item.name}</p>
                </button>
            )
        })
    }


    return (
        <form className={style['note-editor']} onSubmit={handleSubmit}>
            <div className={style['note-editor__content']}>
                <div className={style['note-editor__main']}>
                    <div className={style['note-editor__top']}>

                        <div className={style['note-editor__date']}>
                            <label className={style['note-editor__label']} htmlFor="date">Дата</label>
                            <input type="date"
                                   id="date"
                                   name="date"
                                   onChange={(e) => updateFormField({"currentDate": e.target.value})}/>
                        </div>

                        <div className={style['note-editor__mood']}>
                            <label htmlFor="mood" className={style['note-editor__label']}>Настроение</label>
                            <div id="mood" className={style['note-editor__mood-cover']}>{renderEmotionCards()}</div>
                        </div>

                    </div>

                    <div className={style['note-editor__field']}>
                        <label htmlFor="title" className={style['note-editor__label']}>Заголовок</label>
                        <input id="title"
                               className={style['note-editor__input']}
                               type="text"
                               placeholder="Введите заголовок заметки..."
                               onChange={(e) => updateFormField({"title": e.target.value})}
                        />
                    </div>

                    <div className={style['note-editor__cover']}>
                        <label htmlFor="editor" className={style['note-editor__label']}>Ваши мысли</label>
                        <textarea id="editor"
                                  className='note-editor__editor'
                                  placeholder="Начните писать свои мысли..."
                                  onChange={(e) => updateFormField({"note": e.target.value})}/>
                    </div>

                    <div className={style['note-editor__tags']}>
                        <label htmlFor="tags" className={style['note-editor__label']}>Теги</label>
                        <input id="tags"
                               className={style['note-editor__tags']}
                               type="text"
                               placeholder="Добавьте теги(например: работа, здоровье, личное...)"
                               onChange={(e) => updateFormField({"tags": e.target.value})}
                        />
                    </div>

                </div>

                {/*<aside className={style['note-editor__sidebar']}>*/}
                {/*    <article className={style['note-editor__weather']}>*/}
                {/*        <div className={style['note-editor__weather-header']}>*/}
                {/*            <h2>Погода</h2>*/}
                {/*            <p>Город</p>*/}
                {/*        </div>*/}
                {/*       <div className={style['note-editor__weather-main']}>*/}
                {/*           <div></div>*/}
                {/*       </div>*/}
                {/*        */}
                {/*        */}
                {/*    </article>*/}
                {/*    </aside>*/}

            </div>

            <footer className={style['note-editor__footer']}>
                <button className={style['note-editor__button']} type="reset">
                    Очистить
                </button>

                <button className={style['note-editor__button']} type="submit">
                    Сохранить заметку
                </button>
            </footer>
        </form>
    )
}