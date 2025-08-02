'use client'

import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 pt-5'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>
          Sign Up
        </h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Full Name
            </label>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 '
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 '
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              placeholder='••••••••'
              className='w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 '
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700'
          >
            Sign Up
          </button>
        </form>
        <p className='text-sm text-center text-gray-600'>
          Already have an account?{' '}
          <Link href='/login' className='text-green-600 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
