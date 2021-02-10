import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

const enableReduxDevTools = () => process.env.NODE_ENV === 'development' ? true : false

console.log(`enableReduxDevTools: ${enableReduxDevTools()}`)

const store = configureStore({
  reducer: rootReducer,
  devTools: enableReduxDevTools()
})

export default store