import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
        <div className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative bg-gradient-to-r from-emerald-50 to-teal-50 p-12 sm:p-24 lg:p-32 rounded-3xl overflow-hidden shadow-sm'>
                <div className='relative z-10'>
                    <h1 className='text-3xl sm:text-5xl font-bold mb-8 max-w-lg leading-tight text-gray-800'>Download Mobile App For Better Experience</h1>
                    <div className='flex gap-4'>
                        <a href="#" className='inline-block transform transition-transform hover:scale-105'>
                            <img className='h-14' src={assets.play_store} alt="" />
                        </a>
                        <a href="#" className='inline-block transform transition-transform hover:scale-105'>
                            <img className='h-14' src={assets.app_store} alt="" />
                        </a>
                    </div>
                </div>
                <img className='absolute w-96 right-0 bottom-0 mr-10 max-lg:hidden drop-shadow-2xl' src={assets.app_main_img} alt="" />
            </div>
        </div>
    )
}

export default AppDownload