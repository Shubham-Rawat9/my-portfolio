import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes/Routes';  

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <main>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </main>
    </BrowserRouter>
  )
}

export default App
