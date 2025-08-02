import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    name: 'Riya Shah',
    referralCode: 'riya2025',
    totalDonations: 5200,
  })
}
