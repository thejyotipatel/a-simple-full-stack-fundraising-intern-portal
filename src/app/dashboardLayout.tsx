'use client'
import Navbar from '@/app/components/Navbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default DashboardLayout
