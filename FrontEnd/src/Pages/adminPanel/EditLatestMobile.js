import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



export const EditLatestMobile = () => {
    const [mobile, setMobile] = useState({
        name: '',
        price: '',
        quantity: '',
        year: '',
        imgURL: '',
        brand: '',
        details:'',
        description: ''
    });

    const [message, setMessage] = useState('');
    const [isMsgError, setIsMsgError] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/product/get/${id}`);
            setMobile(res.data);
        } catch (error) {
            console.error('Error fetching mobile data:', error);
        }
    };

    const handleCancel = () => {
        
        navigate('/adminpanel');
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/product/update/${id}`, mobile);
            setMessage('Product updated successfully!');
            setIsMsgError(false);
            clearMessageAfterTimeout();
            navigate('/adminpanel');
        } catch (error) {
            setMessage('Error updating product.');
            setIsMsgError(true);
            clearMessageAfterTimeout();
        }
    };

    const clearMessageAfterTimeout = () => {
        setTimeout(() => {
            setMessage('');
        }, 3000); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMobile({ ...mobile, [name]: value });
    };

    return (
        <div id='addFeatured' className='flex h-screen items-center justify-center'>
            <div className='flex h-auto w-[700px] flex-col items-center justify-center py-2 rounded shadow-2xl border-2'>
                <h1 className='text-center py-2 bg-green-400 w-full text-2xl mb-4 uppercase'>updated latest MOBILE PHONES</h1>
                {message && (
                    <div className={`mb-4 text-center ${isMsgError ? 'text-red-500' : 'text-green-500'}`}>
                        {message}
                    </div>
                )}
                <form className='w-[80%] text-center' onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <label className='block text-sm font-bold mb-2' htmlFor='name'>Product Name</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='name'
                            value={mobile.name}
                            type='text'
                            name='name'
                            placeholder='Enter product Name'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='mb-4 w-full'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price'>Product Price</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='price'
                                type='text'
                                value={mobile.price}
                                name='price'
                                placeholder='Enter product Price'
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-4 w-full'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='brand'>Product Brand</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='brand'
                                value={mobile.brand}
                                type='text'
                                name='brand'
                                placeholder='Enter product Brand'
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='mb-4 w-full'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='year'>Product Year</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='year'
                                value={mobile.year}
                                type='text'
                                name='year'
                                placeholder='Enter product Year'
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-4 w-full'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='quantity'>Quantity</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='quantity'
                                value={mobile.quantity}
                                type='text'
                                name='quantity'
                                placeholder='Enter Quantity'
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='details'>Product Details</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='details'
                            value={mobile.details}
                            type='text'
                            name='details'
                            placeholder='Enter RAM ROM'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='imgURL'>Image URL</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='imgURL'
                            value={mobile.imgURL}
                            type='text'
                            name='imgURL'
                            placeholder='Enter Image URL'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>Description</label>
                        <textarea
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='description'
                            value={mobile.description}
                            name='description'
                            placeholder='Enter description'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4 flex gap-10 items-center justify-center'>
                        <div className='flex items-center justify-between'>
                            <button
                                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                type='submit'
                            >
                                Update
                            </button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button
                                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                type='button'
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
