'use client'
type RewardCardProps = {
  name: string
  tier?: 'bronze' | 'silver' | 'gold' | 'default'
  amount?: number
}
const tierStyles = {
  bronze: 'bg-yellow-500 ',
  silver: 'bg-gray-500 ',
  gold: 'bg-amber-600 ',
  default: 'bg-zinc-500  ',
}
export default function RewardCard({ name, amount }: RewardCardProps) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md transition duration-200 ease-in-out flex flex-col items-center justify-center text-center  ${
        name ? tierStyles[name as keyof typeof tierStyles] : tierStyles.default
      }`}
    >
      {amount && (
        <p className='mt-1 text-sm text-gray-300 mb-2'>
          <span className='font-medium text-white '>${amount}</span>
        </p>
      )}
      <h4 className='text-2xl font-medium text-white uppercase'>{name}</h4>
    </div>
  )
}
