import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import shopCategory from './Pages/shopCategory';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<shopCategory category="men"/>}/>
        <Route path='/womens' element={<shopCategory category="women"/>}/>
        <Route path='/kids' element={<shopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
            <Route path=':ProductId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
