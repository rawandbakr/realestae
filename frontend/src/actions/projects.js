import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createProject=(project)=> async (dispatch)=>{
  try {
   const{data}= await api.postProject(project);
    dispatch({type:CREATE ,payload:data})
    
  }  catch (error) {
    console.log(error.message);
  }
};

