import {FETCH_ALL ,CREATE ,DELETE } from "../reducers/ProjectSlice"
import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();
    console.log(data)
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createProject=(project)=> async (dispatch)=>{
  try {
    const { data }= await api.postProject(project);

    dispatch({type:CREATE ,payload:data})
    
  }  catch (error) {
    console.log(error.message);
  }
};
export const removeProject=(_id)=> async (dispatch)=>{
  try {
    const { data }= await api.deleteProject(_id);

    dispatch({type:DELETE ,payload:data})
    
  }  catch (error) {
    console.log(error.message);
  }
};

