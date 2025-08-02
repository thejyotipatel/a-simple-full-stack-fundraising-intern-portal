import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    leaderboard: [
      { name: 'Ankit Shah', donations: 9000 },
      { name: 'Maya Singh', donations: 5200 },
      { name: 'Riya Mehta', donations: 3000 },
    ],
  })
}
