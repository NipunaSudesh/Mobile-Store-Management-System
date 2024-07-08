import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const UserTable = () => {
const [users,setUsers]=useState([]);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/user/users');
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error loading Users:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const token = localStorage.getItem('authToken'); 
  //     console.log(token)
  //     await axios.delete(`http://localhost:5000/user/delete/${id}`, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
     
  //     fetchUsers();
  //     console.log(`User with ID ${id} deleted successfully.`);
  //   } catch (error) {
  //     console.error(`Error deleting user with ID ${id}:`, error);
  //   }
  // };
  const handleDelete =async (id) =>{
    try {
      await axios.delete(`http://localhost:5000/user/delete/${id}`);
      console.log('deleted!!');
      fetchUsers();
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  }


  return (
    <div className='flex items-center justify-center'>
      <table className='shadow-lg border w-[70%] mt-4'>
        <thead>
          <tr>
            <th scope='col' className='bg-green-500 text-white p-2 '>#</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>Name</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>Email</th>
            <th scope='col' className='bg-green-500 text-white p-2 '>Action</th>

          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <tr key={index}
            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
            >
              <th scope='row' >{index + 1}</th>
              <td className='text-center'>{user.name}</td>
              <td className='text-center'>{user.email}</td>
              <td className='text-center'>
                <button className='text-center bg-red-500 text-white rounded-sm p-1 hover:bg-red-700' onClick={()=>handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
