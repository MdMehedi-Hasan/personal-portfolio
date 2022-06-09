import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          {/* <Route path="/" element={}></Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
