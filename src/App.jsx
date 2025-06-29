import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes/Routes';  
import './App.css';


function App() {
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>{
        setLoading(false);
    },2000)
  
    return () => clearTimeout(timer);
  }, [])
  


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
