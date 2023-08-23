import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  Labs,
  StudyGuide,
  Modules,
  LectureNotes,
  DataSheets,
  Instructors,
  Error,
} from "./pages";
import { Navbar, Title, Footer } from "./components";

function App() {
  return (
    <Router>
      <Title></Title>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/labs' element={<Labs></Labs>}></Route>
        <Route path='/study-guide' element={<StudyGuide></StudyGuide>}></Route>
        <Route path='/modules' element={<Modules></Modules>}></Route>
        <Route
          path='/lecture-notes'
          element={<LectureNotes></LectureNotes>}
        ></Route>
        <Route path='/data-sheets' element={<DataSheets></DataSheets>}></Route>
        <Route
          path='/instructors'
          element={<Instructors></Instructors>}
        ></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
