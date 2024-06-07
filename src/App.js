
import './App.css';
import  {NavBar}  from './Components/NavBar';
import  {AdSwiper} from './Components/AdSwiper';
import {ProductCategory} from './Components/ProductCategory';
import {LatestMobile} from './Components/LatestMobile';
import {Featurchs} from './Components/Featurchs';
import {FeaturedMobile} from './Components/FeaturedMobile';
import {Contact} from './Components/Contact';
import { Footer } from './Components/Footer ';


function App() {
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

export default App;
