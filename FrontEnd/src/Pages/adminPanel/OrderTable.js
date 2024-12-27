import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('/order/get');
      setOrders(res.data);
      console.log('Fetched Orders!');
    } catch (error) {
      console.log('Failed to fetch orders', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/order/delete/${id}`);
      fetchOrders();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <table className='shadow-lg border w-[70%] mt-4'>
        <thead>
          <tr>
            <th scope='col' className='bg-green-500 text-white p-2 '>#</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>Name</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>Address</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>ZipCode</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>Number</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <th scope='row'>{index + 1}</th>
              <td className='text-center'>{order.name}</td>
              <td className='text-center'>{order.address}</td>
              <td className='text-center'>{order.ZipCode}</td>
              <td className='text-center'>{order.Number}</td>
              <td className='text-center'>
                <button
                  className='text-center bg-red-500 text-white rounded-sm p-1 hover:bg-red-700'
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
