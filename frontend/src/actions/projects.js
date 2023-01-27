import {FETCH_ALL ,CREATE ,DELETE, ProjectD} from "../features/project/ProjectSlice"
import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();
    dispatch(FETCH_ALL(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getProject = (id) => async (dispatch) => {
  try {
   const {data}= await api.fetchProject(id);
   dispatch(ProjectD(data))
  } catch (error) {
    console.log(error.message);
  }
};


export const createProject=(project)=> async (dispatch)=>{
  try {
    const { data }= await api.postProject(project);
    dispatch(CREATE(data));
  }  catch (error) {
    console.log(error.message);
  }
};
export const removeProject=(id)=> async (dispatch)=>{
  try {
    const { data }= await api.deleteProject(id);
    dispatch(DELETE(data));
  }  catch (error) {
    console.log(error.message);
  }
};

