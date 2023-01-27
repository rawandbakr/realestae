import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Post from "./pages/Post";
import ProjectDeatil from "./components/ProjectDeatil";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/projects" element={<Projects />}/>
         <Route path="/login" element={<Login/>} />
         <Route path="/post" element={<Post/>} />
         <Route path="/projects/:id" element={<ProjectDeatil/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
