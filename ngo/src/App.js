import React from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './common/Menu';
import Footer from './common/Footer';
import Donate from './components/Donate';
import Support from './components/Support';
function App() {
  return (
    <div>
      <Menu />
     <Donate />
     <Support />
     <Footer />
    </div>
  )
}

export default App
