
import './App.css';
import  {NavBar}  from './Components/navbar/NavBar';
import  {AdSwiper} from './Components/AdSwiper';
import {Brands} from './Components/Brands';
import {LatestMobile} from './Components/LatestMobile';
import {Featurchs} from './Components/Featurchs';
import {FeaturedMobile} from './Components/FeaturedMobile';
import {Contact} from './Components/Contact';
import { Footer } from './Components/Footer ';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SignUp } from './Pages/SignUp';
import { AddCard } from './Pages/AddCard/AddCard';
import { Login } from './Pages/Login';
import { AddProduct } from './Pages/adminPanel/AddProduct';
import { Profile } from './Pages/Profile';
import { AddMobile } from './Pages/adminPanel/AddMobile';
import { AdminPanel } from './Pages/adminPanel/AdminPanel';
import { DashBoard } from './Pages/adminPanel/DashBoard';
import { EditLatestMobile } from './Pages/adminPanel/EditLatestMobile';
import { EditFeatureMobile } from './Pages/adminPanel/EditFeatureMobile';
import  {BrandName}  from './Pages/BrandName';
import { MobileTable } from './Pages/adminPanel/MobileTable';
import { BrandItems } from './Pages/BrandItems';
import { LatestMobile as LatestMobilePage } from './Pages/LatestMobile'; 
import { FeaturedMobile as FeaturedMobilePage } from './Pages/FeaturedMobile'; 

import { ContactUs } from './Pages/ContactUs';
import { ViewLatest } from './Components/ViewLatest';
import { ViewFeature } from './Components/ViewFeature';
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { TermsAndConditions } from "./Pages/TermsAndConditions";
import { ReturnsRefunds } from "./Pages/ReturnsRefunds";

function Home() {
  return (
<div className='flex  flex-col gap-5 items-center '>
  <NavBar />
  <AdSwiper />
  <Brands />
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
    <Route path='/brandname' element={<BrandName />} />
       <Route path='/featuredmobile' element={<FeaturedMobilePage />} />
        <Route path='/latestmobile' element={<LatestMobilePage />} />
    <Route path='/contactus' element={<ContactUs />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/addproduct' element={<AddProduct />} />
    <Route path='/addmobile' element={<AddMobile />} />
    <Route path='/adminpanel' element={<AdminPanel />} />
    <Route path='/dashboard' element={<DashBoard />} />
    <Route path='/editlatest/:id' element={<EditLatestMobile />} />
    <Route path='/editfeature/:id' element={<EditFeatureMobile />} />
    <Route path='/mobile' element={<MobileTable />} />
    <Route path='/brandItems/:brand' element={<BrandItems />} />
    <Route path='/viewLatest/:id' element={<ViewLatest />} />
    <Route path='/viewFeature/:id' element={<ViewFeature />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/returns-refunds" element={<ReturnsRefunds />} />
  </Routes>
</Router>

  );
}

export default App;
