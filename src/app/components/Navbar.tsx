'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Login', href: '/login' },
  { name: 'Signup', href: '/signup' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const pathname = usePathname()

  return (
    <nav className=' bg-gray-100 shadow-md'>
      <div className='max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative '>
        <h1 className='text-xl font-bold text-gray-800 '>Fundraising Portal</h1>
        {/* Desktop Nav */}
        <ul className='hidden sm:flex space-x-6'>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-lg font-medium transition-colors text-500 ${
                  pathname === item.href
                    ? 'text-blue-600 '
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className='sm:hidden text-gray-700 cursor-pointer p-2 rounded-md hover:bg-gray-200 transition-colors'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Mobile Nav Links */}
        {menuOpen && (
          <ul className='sm:hidden absolute top-full right-[2.5rem]  px-4 pb-4 space-y-3 bg-white shadow-lg rounded-md'>
            {navItems.map((item) => (
              <li key={item.href} className='m-4'>
                <Link
                  href={item.href}
                  className={`block text-lg font-medium ${
                    pathname === item.href
                      ? 'text-blue-600  '
                      : 'text-gray-700  hover:text-blue-500  '
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
