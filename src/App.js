
import './App.css';
import  {NavBar}  from './Components/NavBar';
import  {AdSwiper} from './Components/AdSwiper';
import {ProductCategory} from './Components/ProductCategory';
import {LatestMobile} from './Components/LatestMobile';
import {Featurchs} from './Components/Featurchs';


function App() {
  return (
<div className='flex  flex-col gap-5 items-center '>
  <NavBar />
  <AdSwiper />
  <ProductCategory />
  <LatestMobile />
  <Featurchs />
</div>
  );
}

export default App;
