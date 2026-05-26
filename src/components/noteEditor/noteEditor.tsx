import style from "./noteEditor.module.css"
import {TextEditor} from "../../shared/ui/textEditor";

export function NoteEditor() {

    return (
        <section className={style['note-editor']}>
            <div className={style['note-editor__content']}>

                <div className={style['note-editor__main']}>

                    <div className={style['note-editor__top']}>

                        <div className={style['note-editor__date']}>
                            <p className={style['note-editor__label']}>Дата</p>

                        </div>

                        <div className={style['note-editor__mood']}>
                            <p className={style['note-editor__label']}>Настроение</p>
                        </div>

                    </div>

                    <div className={style['note-editor__field']}>
                        <p className={style['note-editor__label']}>Заголовок</p>
                        <input className={style['note-editor__input']} type="text" placeholder="Введите заголовок заметки..." />
                    </div>

                    <div className={style['note-editor__cover']}>
                        <p className={style['note-editor__label']}>Ваши мысли</p>

<TextEditor className='note-editor__editor' placeholder="Начните писать свои мысли..." value= ""/>


                    </div>

                    <div className={style['note-editor__tags']}>
                        <p className={style['note-editor__label']}>Теги</p>
                    </div>

                </div>

                <aside className={style['note-editor__sidebar']} />

            </div>

            <footer className={style['note-editor__footer']}>
                <button className={style['note-editor__button']}>
                    Очистить
                </button>

                <button className={style['note-editor__button']}>
                    Сохранить заметку
                </button>
            </footer>
        </section>
    )
}