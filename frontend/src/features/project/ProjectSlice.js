import { createSlice } from '@reduxjs/toolkit'

export const ProjectSlice = createSlice({
  name: 'Project',
  initialState: {
    value:0,
  },
  reducers: {
    FETCH_ALL: (state,action) => {
      state.value=action.payload
    },
    CREATE:(state,action) => {
      state.value+=action.payload
    },
    DELETE: (state, action) => {
      state.value=state.value.filter((value)=>value._id!==action.payload._id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { FETCH_ALL, CREATE, DELETE } = ProjectSlice.actions

export default ProjectSlice.reducer