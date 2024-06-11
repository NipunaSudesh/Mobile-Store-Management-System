import React from 'react'

export const SignUp = () => {
  return (
    <div className=' flex flex-col items-center justify-center  py-2 bg-blue-100'>
        <h1 className='text-center text-2xl mb-4'>Register</h1>
        <form className='w-full max-w-sm'>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">User Name</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                name='username'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Email</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                name='email'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Password</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                name='password'
                required
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Confirm Password</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='cpassword'
                name='cpassword'
                type='password'
                required
                />
            </div>
            <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        </form>
    </div>
  )
}
