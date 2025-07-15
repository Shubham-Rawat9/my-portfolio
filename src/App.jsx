import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes/Routes';  
import './App.css';


function App() {
  const [loading , setLoading] = useState(true);
// loader useEffect
  useEffect(() => {
    const timer = setTimeout(() =>{
        setLoading(false);
    },2000)
  
    return () => clearTimeout(timer);
  }, [])
  
  // aos useEffect
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);


  return (
    <BrowserRouter>
    {loading ? (<Loader/>) : 
    ( 
       <main>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </main>
    )}
   
    </BrowserRouter>
  )
}

export default App;
