'use client'

import { useEffect, useState } from 'react'

type LeaderboardEntry = {
  name: string
  donations: number
}

export default function Leaderboard() {
  const [leaderboards, setLeaderboards] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    // Fetch Leaderboard
    fetch('/api/leaderboard')
      .then((res) => res.json())
      .then((data) => setLeaderboards(data.leaderboard))
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <h2 className='text-xl font-semibold text-gray-800   mb-4'>
          Leaderboard
        </h2>
        <div className='bg-white text-gray-600  rounded-xl shadow-md p-6'>
          <table className='min-w-full '>
            <thead>
              <tr className='border-b  border-gray-200'>
                <th className='text-left py-2 px-4'>Name</th>
                <th className='text-left py-2 px-4'>Donations</th>
              </tr>
            </thead>
            <tbody>
              {leaderboards.length > 0 ? (
                leaderboards.map((entry, index) => (
                  <tr key={index} className='border-b border-gray-200'>
                    <td className='py-2 px-4'>{entry.name}</td>
                    <td className='py-2 px-4 font-500 text-green-600'>
                      ${entry.donations}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className='py-2 px-4 text-center'>
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
