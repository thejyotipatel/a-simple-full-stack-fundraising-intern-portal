import { NextResponse } from 'next/server'

const rewards = [
  {
    name: 'bronze',
    amount: 1000,
  },
  {
    name: 'silver',
    amount: 5000,
  },
  {
    name: 'gold',
    amount: 10000,
  },
]

export async function GET() {
  return NextResponse.json({
    rewards: rewards,
  })
}
