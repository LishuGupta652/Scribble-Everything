import React from 'react';
import './css/App.css';

// components
import Header from './Components/Header'
import Footer from './Components/Footer'
import Pens from './Components/Pens'

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="pen">
        <Pens/>
      </div>
      <Footer />

    </div>
  );
}

export default App;
