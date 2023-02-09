import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../Pages/Counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})