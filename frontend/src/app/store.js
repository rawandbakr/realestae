import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../features/project/ProjectSlice'

export default configureStore({
  reducer: {
    projects :projectReducer,
  }
})