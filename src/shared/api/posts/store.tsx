import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './posts.tsx'

export const store = configureStore({
    reducer: {
        /*
          сюда RTK Query складывает cache и данные запросов
          state.postsApi → все данные API
        */
        [postsApi.reducerPath]: postsApi.reducer,
    },

    /*
      middleware — "промежуточный слой"
      RTK Query без него НЕ работает
      он отвечает за:
      - запуск запросов
      - кеш
      - обновление данных
    */
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
})