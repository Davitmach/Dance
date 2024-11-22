import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display1 from './pages/display1/display';
import Display2 from './pages/display2/display';
import { Layout } from './layout';
import Display3 from './pages/display3/display';
import Display14 from './pages/display14/display';
import { Display4 } from './pages/display4/display';
import { Display6 } from './pages/display6/display';
import { Display8 } from './pages/display8/display';
import { Display9 } from './pages/display9/display';
import { Display10_1 } from './pages/display10-1/display';
import { Display10_2 } from './pages/display10-2/display';
import { Display11 } from './pages/display11/display11';
import { Display12 } from './pages/display12/display';
import { Display13 } from './pages/display13/display';


function App() {
  return (
   <>
   <BrowserRouter  future={{
    v7_relativeSplatPath: true,
  }}>
   <Routes>
    <Route element={<Layout/>}>
    <Route path='display1' element={<Display1/>}/>
    <Route path='display2' element={<Display2/>}/>
    <Route path='display3' element={<Display3/>}/>
    <Route path='display14' element={<Display14/>}/>
<Route path='display4' element={<Display4/>}/>
<Route path='display6' element={<Display6/>}/>
<Route path='display8' element={<Display8/>}/>
<Route path='display9' element={<Display9/>}/>
<Route path='display10-1' element={<Display10_1/>}/>
<Route path='display10-2' element={<Display10_2/>}/> 
<Route path='display11' element={<Display11/>}/> 
<Route path='display12' element={<Display12/>}/>
<Route path='display13' element={<Display13/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
