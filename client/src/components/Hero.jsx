import { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const { setSearchFilter, setIsSearched } = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
    }

    return (
        <div className='container 2xl:px-20 mx-auto my-10 animate-fade-in'>
            <div className='bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 text-white py-24 text-center mx-2 rounded-3xl shadow-2xl relative overflow-hidden'>
               {/* Decorative background elements */}
               <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight animate-slide-up relative z-10'>Over 1000+ jobs to apply</h2>
                <p className='mb-10 max-w-2xl mx-auto text-lg font-light px-5 opacity-90 leading-relaxed animate-slide-up-delay-1 relative z-10'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
                <div className='flex items-center justify-between bg-white rounded-full text-gray-600 max-w-2xl pl-6 pr-2 py-2 mx-4 sm:mx-auto shadow-2xl transform transition-transform hover:scale-[1.01] animate-slide-up-delay-2 relative z-10'>
                    <div className='flex items-center flex-1'>
                        <img className='h-5 sm:h-6 opacity-40' src={assets.search_icon} alt="" />
                        <input type="text"
                            placeholder='Search for jobs'
                            className='max-sm:text-xs p-3 rounded-full outline-none w-full text-gray-700 placeholder-gray-400 font-medium bg-transparent'
                            ref={titleRef}
                        />
                    </div>
                    <div className='h-8 w-px bg-gray-200 mx-2 hidden sm:block'></div>
                    <div className='flex items-center flex-1'>
                        <img className='h-5 sm:h-6 opacity-40' src={assets.location_icon} alt="" />
                        <input type="text"
                            placeholder='Location'
                            className='max-sm:text-xs p-3 rounded-full outline-none w-full text-gray-700 placeholder-gray-400 font-medium bg-transparent'
                            ref={locationRef}
                        />
                    </div>
                    <button onClick={onSearch} className='btn-primary px-8 py-3 rounded-full text-white font-semibold m-1'>Search</button>
                </div>
            </div>

            <div className='border border-gray-100 shadow-sm mx-2 mt-8 p-8 rounded-2xl flex bg-white/50 backdrop-blur-sm animate-slide-up-delay-2 opacity-0' style={{animationFillMode: 'forwards'}}>
                <div className='flex justify-center gap-10 lg:gap-16 flex-wrap w-full items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500'>
                    <p className='font-medium text-gray-500'>Bridging the Employment Gap</p>
                    <img className='h-6' src={assets.microsoft_logo} alt="" />
                    <img className='h-6' src={assets.walmart_logo} alt="" />
                    <img className='h-6' src={assets.accenture_logo} alt="" />
                    <img className='h-6' src={assets.samsung_logo} alt="" />
                    <img className='h-6' src={assets.amazon_logo} alt="" />
                    <img className='h-6' src={assets.adobe_logo} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero