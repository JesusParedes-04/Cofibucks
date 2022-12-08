
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error404 from './Components/Error404';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';
// import Promocion from './Components/Promocion';
import ItemDetailContainer from "./Components/ItemDetailContainer"


function App() {
  return (
    <BrowserRouter>

    <Navbar />
    <Routes>
    <Route path={"/"} element={<ItemListContainer/>}/>
    {/* <Route path={"/"} element={<Promocion/>}/> */}
    <Route path={"/category/:id"} element={<ItemListContainer/>}/>
    <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
    <Route path={"*"} element={<Error404/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
