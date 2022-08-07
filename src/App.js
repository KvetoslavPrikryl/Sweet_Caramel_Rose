import React from 'react';
import "./index.css";
import {Route, Routes} from "react-router-dom";
import Kennel from './routes/Kennel';
import Home from "./routes/Home";
import Cutting from './routes/Cutting';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Chovatelska_stanice' element={<Kennel />} />
      <Route path='/strihani' element={<Cutting />} />
      
    </Routes>
    </>
  );
}

export default App;
