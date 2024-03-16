import React from 'react'

const Signup = () => {
  return (
    <div className='container mx-auto px-4'>

    <div className='text-center mt-5 font-bold'>
    <h1>SignUp</h1>
    </div>

    <div className='text-center mt-5 block'>
      <input
          className='placeholder-red-400 bg-red-100'
          placeholder='Username' 
      />
    </div>

    <div className='text-center mt-5 block'>
      <input
          className='placeholder-red-400 bg-red-100'
          placeholder='Email' 
      />
    </div>

    <div className='text-center mt-5'>
      <input
          className='placeholder-red-400 bg-red-100'
          placeholder='Password' 
          type='password'
      />
    </div>

    <div className='text-center mt-5'>
      <input
          className='placeholder-red-400 bg-red-100'
          placeholder='confirm Password' 
          type='password'
      />
    </div>

    <div className='text-center mt-5'>
    <button type="button" className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 justify-center items-center">Signup</button>
    </div>
    
  </div>
  )
}

export default Signup