import axios from 'axios';

const url='http://localhost:4000/projects';

export const fetchProjects=()=> axios.get(url);
export const postProject=(project)=>axios.post(url,project)
export const deleteProject=(id)=>axios.delete(`${url}/${id}`)