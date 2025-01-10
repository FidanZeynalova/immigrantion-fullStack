import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { imigrantApi } from './slices/ImigrantSlice'

export const store = configureStore({
  reducer: {
    [imigrantApi.reducerPath]: imigrantApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imigrantApi.middleware),
})
setupListeners(store.dispatch)