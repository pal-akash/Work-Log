import Login from '@/components/Login'
import Navbar from '@/components/Navbar'

export default function LoginPage() {
  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center h-80vh'>
            <div>
                <p>
                    Remember, time is your most valuable asset. Invest it wisely with the help of your log.
                </p>
                <Login />
            </div>
        </div>
    </div>
  )
}