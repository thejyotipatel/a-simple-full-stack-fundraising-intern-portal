export interface InternData {
  name: string
  referralCode: string
  totalDonations: number
}

export interface RewardsData {
  name: string
  amount: number
}

type LeaderboardData = {
  name: string
  donations: number
}

export async function getInternData(): Promise<InternData> {
  const res = await fetch('/api/intern')
  if (!res.ok) throw new Error('Failed to fetch intern data')
  return res.json()
}

export async function getRewardsData(): Promise<RewardsData[]> {
  const res = await fetch('/api/rewards')
  if (!res.ok) throw new Error('Failed to fetch rewards data')
  const data = await res.json()
  return data.rewards
}

export async function getLeaderboardData(): Promise<LeaderboardData[]> {
  const res = await fetch('/api/leaderboard')
  if (!res.ok) throw new Error('Failed to fetch leaderboard data')
  const data = await res.json()
  return data.leaderboard
}
