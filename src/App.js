import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lecturer from "./Lecturer";
import Student from "./Student";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
