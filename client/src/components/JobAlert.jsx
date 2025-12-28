import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const JobAlert = () => {

    const { backendUrl } = useContext(AppContext)

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            if (email && phone) {
                const { data } = await axios.post(backendUrl + '/api/users/subscribe', { email, phone })
                if (data.success) {
                    toast.success(data.message)
                    setEmail('')
                    setPhone('')
                } else {
                    toast.error(data.message)
                }
            } else {
                toast.error("Please enter both Email and Phone Number")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='container 2xl:px-20 mx-auto my-20 animate-fade-in'>
            <div className='relative bg-gradient-to-r from-emerald-700 to-teal-900 p-12 sm:p-16 rounded-3xl overflow-hidden shadow-2xl'>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

                <div className='relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10'>
                    
                    {/* Text Section */}
                    <div className='lg:w-1/2 text-center lg:text-left space-y-4'>
                        <h2 className='text-3xl sm:text-4xl font-extrabold text-white leading-tight'>
                            Never Miss a <span className='text-emerald-300'>Dream Job</span>
                        </h2>
                        <p className='text-emerald-100 text-lg max-w-xl mx-auto lg:mx-0 font-light'>
                            Get instant job updates delivered directly to your email and phone. Be the first to apply!
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className='lg:w-1/2 w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg'>
                        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
                            <div className='relative group'>
                                <img className='absolute left-4 top-3.5 w-5 h-5 opacity-40 group-focus-within:opacity-100 transition-opacity' src={assets.email_icon} alt="" />
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    className='w-full pl-12 pr-4 py-3 rounded-xl bg-white/90 focus:bg-white outline-none text-gray-700 placeholder-gray-500 transition-all border border-transparent focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='relative group'>
                                <span className='absolute left-4 top-3.5 opacity-40 group-focus-within:opacity-100 transition-opacity text-gray-800'><i className="fa-solid fa-phone"></i></span>
                                {/* Uses FontAwesome for phone icon as assets.phone_icon might not exist, or I can use a generic icon */}
                                <input 
                                    type="tel" 
                                    placeholder='Enter your phone number' 
                                    className='w-full pl-12 pr-4 py-3 rounded-xl bg-white/90 focus:bg-white outline-none text-gray-700 placeholder-gray-500 transition-all border border-transparent focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200'
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>

                            <button className='w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 mt-2'>
                                Subscribe Now
                            </button>
                            <p className='text-xs text-emerald-200 text-center mt-2'>We respect your privacy. No spam, ever.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobAlert
