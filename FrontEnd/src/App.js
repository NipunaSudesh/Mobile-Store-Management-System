
import './App.css';
import  {NavBar}  from './Components/navbar/NavBar';
import  {AdSwiper} from './Components/AdSwiper';
import {ProductCategory} from './Components/ProductCategory';
import {LatestMobile} from './Components/LatestMobile';
import {Featurchs} from './Components/Featurchs';
import {FeaturedMobile} from './Components/FeaturedMobile';
import {Contact} from './Components/Contact';
import { Footer } from './Components/Footer ';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { SignUp } from './Pages/SignUp';
import { AddCard } from './Pages/AddCard';
import { Login } from './Pages/Login';
import { AddProduct } from './Pages/AddProduct';
import { Profile } from './Pages/Profile';
import { AddMobile } from './Pages/AddMobile';

function Home() {
  return (
<div className='flex  flex-col gap-5 items-center '>
  <NavBar />
  <AdSwiper />
  <ProductCategory />
  <LatestMobile />
  <Featurchs />
  <FeaturedMobile />
  <Contact />
  <Footer />
</div>

  );
}


function App(){
  return(
    <Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/addcard' element={<AddCard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/addproduct' element={<AddProduct />} />
    <Route path='/addmobile' element={<AddMobile />} />
  </Routes>
</Router>

  );
}

export default App;
