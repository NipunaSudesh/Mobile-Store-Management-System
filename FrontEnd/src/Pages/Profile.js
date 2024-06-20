import React from 'react'

export const Profile = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
    <div className=' flex h-auto w-[500px] flex-col items-center justify-center  py-2 rounded shadow-2xl border-2'>
        <h1 className='text-center text-2xl mb-4 py-2 bg-green-400 w-full'>My Profile</h1>
        {/* {message && (
            <div className='mb-4 text-center text-green-500'>
            {message}
          </div>)} */}
        <form className='w-full max-w-sm'
         //onSubmit={handleSubmit}
         >
                   <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">Name</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                name='name'

                
                />
                </div>
                <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="Email">Email</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                name='email'
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="Password">New Password</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='nPassword'
                type='text'
                name='nPassword'

                
                />
            </div>
            <div className='mb-4'>
                <lable className='block text-gray-700 text-sm font-bold mb-2' htmlFor="cPassword">Confirm Password</lable>
                <input 
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='cPassword'
                type='text'
                name='cPassword'
               
                />
            </div>

          <div className='flex flex-col gap-4 items-center justify-center my-5'>
            <div className='flex gap-4 items-center justify-center  w-full'>
            <div className="flex items-center justify-between  w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Update
          </button>
        </div>
        <div className="flex items-center justify-between  w-full">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Log Out
          </button>
        </div>
            </div>
            <div className='bg-red-300 w-full items-center justify-between'>
            <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-full"
            type="button"
          >
            Back
          </button>
        </div>
            </div>
          </div>

          </form>
          </div>
          </div>
  )
}
