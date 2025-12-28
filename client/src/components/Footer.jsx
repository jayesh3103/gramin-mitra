import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex flex-col items-center justify-center gap-6 py-10 mt-20 text-center border-t border-gray-100 animate-fade-in'>
      <img className='h-10 cursor-pointer hover:opacity-80 transition-opacity' src={assets.logo} alt="" />
      <p className='text-sm text-gray-500'>
        Copyright © GraminMitra | Bridging the Gap, Connecting Lives.
      </p>
      <div className='flex gap-4'>
        <img width={38} className='cursor-pointer hover:scale-110 transition-transform opacity-70 hover:opacity-100' src={assets.facebook_icon} alt="Facebook" />
        <img width={38} className='cursor-pointer hover:scale-110 transition-transform opacity-70 hover:opacity-100' src={assets.twitter_icon} alt="Twitter" />
        <img width={38} className='cursor-pointer hover:scale-110 transition-transform opacity-70 hover:opacity-100' src={assets.instagram_icon} alt="Instagram" />
      </div>
    </div>
  )
}

export default Footer
