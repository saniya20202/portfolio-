import React from 'react';
import Navbar from './components/navbar'; // ✅ Corrected import statement
import MainPart from './components/MainPart';  // ✅ New import

const App = () => {
  return (
    <div className='App'>
      <Navbar />     
      <MainPart />    {/* ✅ Use the new component here */}
    </div>
  );
}

export default App;
