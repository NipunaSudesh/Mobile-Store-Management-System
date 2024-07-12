import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const View = () => {
  const [mobile, setMobile] = useState({
    name: '',
    price: '',
    quantity: '',
    year: '',
    type:'',
    imgURL: '',
    brand: '',
    details:'',
    description: ''
});
  const { id } = useParams();
console.log('id :'.id);

  useEffect(() => {
    const fetchMobile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/product/get/${id}`);
        setMobile(res.data);
        console.log('Product Data:', res.data);

        if (res.data.type !== 'latest') {
          const res = await axios.get(`http://localhost:5000/feature-mobile/get/${id}`);
          setMobile(res.data);
          console.log('Feature Mobile Data:', res.data);
        }
      } catch (error) {
        console.log('Failed to fetch mobile', error);
      }
    };

    fetchMobile();
  }, [id]);




  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='bg-green-300 w-[80%] sml:w-[80%] lgl:w-[60%] h-[70%] flex  gap-2 '>
        <div className= ' w-2/5 bg-red-200 items-center justify-center'>
        
        </div>
        <div className= 'w-3/5 bg-red-500'>
        <h1>{mobile.name}</h1>
        </div>

      </div>
    </div>
  )
}
