import { createSlice } from '@reduxjs/toolkit'

export const ProjectSlice = createSlice({
  name: 'Project',
  initialState: {
    value:[],
    link:[],
  },
  reducers: {
    FETCH_ALL: (state,action) => {
      state.value=action.payload
    },
    CREATE:(state,action) => {
      state.value.push(action.payload)
    },
    DELETE: (state, action) => {
      state.value=state.value.filter((val)=>val._id!==action.payload._id);
    },
    ProjectD: (state, action) => {
      state.link=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { FETCH_ALL, CREATE, DELETE,ProjectD } = ProjectSlice.actions

export default ProjectSlice.reducer