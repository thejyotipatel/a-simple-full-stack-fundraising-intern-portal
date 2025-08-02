'use client'

import { useEffect, useState } from 'react'
import RewardCard from '@/components/RewardCard'

interface InternData {
  name: string
  referralCode: string
  totalDonations: number
}

interface RewardsData {
  name: string
  amount: number
}

export default function DashboardPage() {
  const [intern, setIntern] = useState<InternData | null>(null)
  const [rewards, setRewards] = useState<RewardsData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch intern details
    fetch('/api/intern')
      .then((res) => res.json())
      .then((data) => {
        setIntern(data)
        setLoading(false)
      })

    // Fetch rewards
    fetch('/api/rewards')
      .then((res) => res.json())
      .then((data) => setRewards(data.rewards))
  }, [])

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-6'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <h1 className='text-3xl font-bold text-gray-800'>Intern Dashboard</h1>

          {/* Intern Info */}
          <div className='p-6 bg-white rounded-lg shadow'>
            {!loading ? (
              <>
                <h2 className='text-xl font-semibold text-gray-700'>
                  Welcome, {intern?.name}
                </h2>
                <p className='mt-2 text-gray-600'>
                  Referral Code:{' '}
                  <span className='font-medium text-blue-600'>
                    {intern?.referralCode}
                  </span>
                </p>
                <p className='mt-1 text-gray-600'>
                  Total Donations Raised:{' '}
                  <span className='font-bold text-green-700'>
                    ${intern?.totalDonations}
                  </span>
                </p>
              </>
            ) : (
              <p className='text-gray-500'>Loading intern data...</p>
            )}
          </div>

          {/* Rewards Section */}
          <div className='p-6 bg-white rounded-lg shadow'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>
              Unlockable Rewards
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {!loading ? (
                rewards.map((reward, index) => (
                  <RewardCard
                    key={index}
                    name={reward.name}
                    amount={reward.amount}
                  />
                ))
              ) : (
                <p className='text-gray-500'>Loading rewards...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
