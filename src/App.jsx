import React from 'react';
import Navbar from './components/navbar'; // ✅ Corrected import statement
import MainPart from './components/MainPart';  // ✅ New import

const App = () => {
  return (
    <div className='App'>
      <Navbar />     
      <MainPart />  
      <AboutMe />     

    </div>
  );
}

export default App;
