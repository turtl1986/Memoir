import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Post = {
    userId:number
    id: number
    title: string
    body: string
}

export const postsApi = createApi({
    reducerPath: 'postsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),

    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
        }),

        // ОДИН ПОСТ
        getPost: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
        }),
    }),
})

export const { useGetPostsQuery, useGetPostQuery } = postsApi