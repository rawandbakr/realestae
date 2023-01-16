import { configureStore } from '@reduxjs/toolkit'
import ProjectsReducer from '../reducers/ProjectSlice'

export default configureStore({
  reducer: {
    Projects :ProjectsReducer,
  },
})