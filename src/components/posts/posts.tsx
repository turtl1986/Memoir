import {useGetPostsQuery} from "../../shared/api/posts/posts.tsx";
import style from './posts.module.css'
type Post = {
    userId:number
    id: number
    title: string
    body: string
}

export function Posts(){

    /*
    В ЭТОЙ СТРОКЕ ПРОИСХОДИТ ВСЁ МАГИЧЕСКОЕ:

    1. компонент смонтировался
    2. RTK Query увидел useGetPostsQuery()
    3. автоматически отправил fetch:
       GET https://jsonplaceholder.typicode.com/posts
    4. сохранил результат в Redux cache
    5. вернул нам:
       - data
       - isLoading
       - error
  */
    const {data,isLoading, error} = useGetPostsQuery()

    /*
      ПОКА ДАННЫХ НЕТ → показываем загрузку
    */
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    /*
      ЕСЛИ ОШИБКА → показываем ошибку
    */
    if (error) {
        return <h1>Something went wrong</h1>
    }

    return (
        <div className={style["posts__container"]}>
            {data?.map((post: Post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )



}