import { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { user } = useUser()

    const navigate = useNavigate()

    const { setShowRecruiterLogin } = useContext(AppContext)

    return (
        <div className='sticky top-0 z-50 glass w-full animate-fade-in'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center h-20 transition-all duration-300'>
                <img onClick={() => navigate('/')} className='cursor-pointer h-12 hover:scale-105 transition-all' src={assets.logo} alt="" />
                {
                    user
                        ? <div className='flex items-center gap-4 text-gray-700 font-medium'>
                            <Link to={'/applications'} className='hover:text-primary transition-colors'>Applied Jobs</Link>
                            <p className='text-gray-300'>|</p>
                            <p className='max-sm:hidden'>Hi, <span className='text-primary'>{user.firstName + " " + user.lastName}</span></p>
                            <UserButton />
                        </div>
                        : <div className='flex gap-4 max-sm:text-xs items-center'>
                            <button onClick={e => setShowRecruiterLogin(true)} className='text-gray-600 hover:text-primary transition-colors font-medium'>Recruiter Login</button>
                            <button onClick={e => openSignIn()} className='btn-primary px-6 sm:px-9 py-2 rounded-full font-medium'>Login</button>
                        </div>
                }

            </div>
        </div>
    )
}

export default Navbar