import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {

  const navigate = useNavigate()

  return (
    <div className='glass-card p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-200 border border-transparent bg-white/60'>
      <div className='flex justify-between items-start mb-4'>
        <img className='h-12 w-12 object-contain bg-white rounded-lg p-1 shadow-sm' src={job.companyId.image} alt="" />
        <span className='bg-emerald-50 text-emerald-600 text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wide border border-emerald-100'>New</span>
      </div>
      
      <h4 className='font-bold text-xl text-gray-800 line-clamp-1 group-hover:text-emerald-600 transition-colors'>{job.title}</h4>
      
      <div className='flex flex-wrap items-center gap-2 mt-3 text-xs font-medium'>
        <span className='bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full flex items-center gap-1'>
          <i className="fa-solid fa-location-dot text-[10px]"></i> {job.location}
        </span>
        <span className='bg-red-50 text-red-600 border border-red-100 px-3 py-1 rounded-full'>
          {job.level}
        </span>
      </div>
      
      <p className='text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2' dangerouslySetInnerHTML={{ __html: job.description }}></p>
      
      <div className='mt-6 flex gap-3 text-sm font-medium'>
        <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }} className='btn-primary px-5 py-2.5 rounded-lg flex-1 shadow-none hover:shadow-lg'>Apply now</button>
        <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }} className='text-gray-600 border border-gray-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg px-5 py-2.5 flex-1 transition-all duration-300'>Learn more</button>
      </div>
    </div>
  )
}

export default JobCard