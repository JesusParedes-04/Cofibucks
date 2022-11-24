
import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div> 
    <Navbar />
    <ItemListContainer greeting={'Bienvenidos a probar el mejor café'} />
  </div>
  );
}

export default App;
