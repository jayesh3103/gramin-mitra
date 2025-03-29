import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex flex-col items-center justify-center gap-4 py-3 mt-20 text-center'>
      <img width={160} src={assets.logo} alt="" />
      <p className='border-t border-gray-400 pt-4 text-sm text-gray-500 w-full'>
        Copyright GraminMitra | All rights reserved.
      </p>
      <div className='flex gap-2.5'>
        <img width={38} src={assets.facebook_icon} alt="https://www.facebook.com/" />
        <img width={38} src={assets.twitter_icon} alt="https://wwww.x.com" />
        <img width={38} src={assets.instagram_icon} alt="https://www.instagram.com" />
      </div>
    </div>
  )
}

export default Footer
