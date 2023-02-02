import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restaurentlist from './Components/Restaurentlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewRest from './Components/ViewRest';

function App() {
  return (
    <div className="App">


      <Router>
      <Header></Header>


      <Routes>
        
        <Route path='/' element={<Restaurentlist/>}/>

        <Route path='/view-restaurant/:id' element={<ViewRest/>}/>
       {/* <ViewRest/> */}
      </Routes>



      <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
