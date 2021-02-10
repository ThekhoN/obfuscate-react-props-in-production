import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
})

export default store