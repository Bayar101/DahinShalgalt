import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './container/home'
import Title1 from "./component/titles/title1";
import Title2 from "./component/titles/title2";
import Title3 from "./component/titles/title3";


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/title1' element={<Title1/>}/>
            <Route path='/title2' element={<Title2/>}/>
            <Route path='/title3' element={<Title3/>}/>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
