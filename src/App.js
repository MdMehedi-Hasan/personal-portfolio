import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
