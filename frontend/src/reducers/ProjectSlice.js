import { createSlice } from '@reduxjs/toolkit'

export const ProjectSlice = createSlice({
  name: 'Project',
  initialState: {
    values:[],
  },
  reducers: {
    FETCH_ALL: (state,action) => {
      state.values=action.payload
    },
    CREATE:(state,action) => {
      state.values+=action.payload
    },
    DELETE: (state, action) => {
      state.values.filter((value)=>value._id!==action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { FETCH_ALL, CREATE, DELETE } = ProjectSlice.actions

export default ProjectSlice.reducer