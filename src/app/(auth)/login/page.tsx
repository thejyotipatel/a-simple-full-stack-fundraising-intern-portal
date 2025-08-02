'use client'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>Login</h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              placeholder='••••••••'
              className='w-full px-4 py-2 mt-1 border rounded-md focus:border-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700'
          >
            Login
          </button>
        </form>
        <p className='text-sm text-center text-gray-600'>
          Don’t have an account?{' '}
          <Link href='/signup' className='text-blue-600 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
