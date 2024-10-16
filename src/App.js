import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lecturer from "./Lecturer";
import Student from "./Student";
import Login from "./Login";
import Studentadmin from "./Studentadmin";
import LecturerLoginadmin from "./LecturerLoginadmin";
import Lectureradmin from "./Lectureradmin";
import StudentLoginadmin from "./StudentLoginadmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Lecturer" element={<Lecturer />}></Route>
          <Route path="/Student" element={<Student />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Studentadmin" element={<Studentadmin />}></Route>
          <Route
            path="/LecturerLoginadmin"
            element={<LecturerLoginadmin />}
          ></Route>
          <Route path="/Lectureradmin" element={<Lectureradmin />}></Route>
          <Route
            path="/StudentLoginadmin"
            element={<StudentLoginadmin />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
