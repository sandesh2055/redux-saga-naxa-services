import React, { useEffect } from "react";
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import ScrollToTop from './components/pages/ScrollToTop';
import {useDispatch} from "react-redux"
import {getServices} from "./redux/actions/index"


function App() {
    const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getServices())
   }, [])

  return (
    <div >
      <ScrollToTop />
      <Navbar />
      <Card  />            
     
    </div>
  );
}

export default App;
