import Nav from './components/Navbar/Nav'
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import Products from "./components/Products/Products" ; 
import ErrorPage from './components/ErrorPage/Error';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import "./App.css" ;

function App() {
  return (
    <>

       <Router>
            <Nav/>
             <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="*" element ={<ErrorPage/>}/>
             </Routes>

       </Router>


        
    </>
    
  );
}

export default App;
