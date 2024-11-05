import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import Api from '../services/api'
export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritosReducer,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
