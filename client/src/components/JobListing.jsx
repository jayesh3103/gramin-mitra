import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {

    const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext)

    const [showFilter, setShowFilter] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedLocations, setSelectedLocations] = useState([])

    const [filteredJobs, setFilteredJobs] = useState(jobs)

    const handleCategoryChange = (category) => {
        setSelectedCategories(
            prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        )
    }

    const handleLocationChange = (location) => {
        setSelectedLocations(
            prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
        )
    }

    useEffect(() => {

        const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category)

        const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location)

        const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())

        const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

        const newFilteredJobs = jobs.slice().reverse().filter(
            job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
        )

        setFilteredJobs(newFilteredJobs)
        setCurrentPage(1)
    }, [jobs, selectedCategories, selectedLocations, searchFilter])

    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>

            {/* Sidebar */}
            <div className='w-full lg:w-1/4 bg-white/50 backdrop-blur-md px-6 py-8 border border-gray-100 rounded-2xl shadow-sm h-fit sticky top-24 animate-fade-in'>

                {/*  Search Filter from Hero Component */}
                {
                    isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                        <>
                            <h3 className='font-bold text-lg mb-4 text-gray-800'>Current Search</h3>
                            <div className='mb-6 text-gray-600 flex flex-wrap gap-2'>
                                {searchFilter.title && (
                                    <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-sm font-medium'>
                                        {searchFilter.title}
                                        <img onClick={e => setSearchFilter(prev => ({ ...prev, title: "" }))} className='cursor-pointer w-4 h-4 opacity-70 hover:opacity-100' src={assets.cross_icon} alt="" />
                                    </span>
                                )}
                                {searchFilter.location && (
                                    <span className='inline-flex items-center gap-2.5 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full text-sm font-medium'>
                                        {searchFilter.location}
                                        <img onClick={e => setSearchFilter(prev => ({ ...prev, location: "" }))} className='cursor-pointer w-4 h-4 opacity-70 hover:opacity-100' src={assets.cross_icon} alt="" />
                                    </span>
                                )}
                            </div>
                        </>
                    )
                }

                <button onClick={e => setShowFilter(prev => !prev)} className='px-6 py-2 rounded-full border border-emerald-500 text-emerald-600 font-medium hover:bg-emerald-50 transition-colors lg:hidden w-full mb-4'>
                    {showFilter ? "Close Filters" : "Show Filters"}
                </button>

                {/* Category Filter */}
                <div className={showFilter ? "" : "max-lg:hidden"}>
                    <h4 className='font-bold text-lg mb-5 text-gray-900'>Filter by Category</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobCategories.map((category, index) => (
                                <li className='flex gap-3 items-center group cursor-pointer' key={index}>
                                    <input
                                        className='w-5 h-5 accent-emerald-600 border-gray-300 rounded focus:ring-emerald-500'
                                        type="checkbox"
                                        onChange={() => handleCategoryChange(category)}
                                        checked={selectedCategories.includes(category)}
                                    />
                                    <span className='group-hover:text-emerald-700 transition-colors'>{category}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Location Filter */}
                <div className={showFilter ? "" : "max-lg:hidden"}>
                    <h4 className='font-bold text-lg pt-10 mb-5 text-gray-900 border-t border-gray-100 mt-6'>Filter by Location</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobLocations.map((location, index) => (
                                <li className='flex gap-3 items-center group cursor-pointer' key={index}>
                                    <input
                                        className='w-5 h-5 accent-emerald-600 border-gray-300 rounded focus:ring-emerald-500'
                                        type="checkbox"
                                        onChange={() => handleLocationChange(location)}
                                        checked={selectedLocations.includes(location)}
                                    />
                                    <span className='group-hover:text-emerald-700 transition-colors'>{location}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Job listings */}
            <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4 lg:pl-10'>
                <div className='mb-8'>
                    <h3 className='font-extrabold text-4xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600' id='job-list'>Latest Jobs</h3>
                    <p className='text-gray-500 mt-1 font-light tracking-wide'>Find your dream job from top companies</p>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
                        <div key={index} className='animate-fade-in' style={{animationDelay: `${index * 0.1}s`}}>
                            <JobCard job={job} />
                        </div>
                    ))}
                </div>


                {/* Pagination */}
                {filteredJobs.length > 0 && (
                    <div className='flex items-center justify-center space-x-2 mt-16'>
                        <a href="#job-list">
                            <img onClick={() => setCurrentPage(Math.max(currentPage - 1), 1)} className='p-3 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:bg-emerald-50 rounded-full transition-all cursor-pointer' src={assets.left_arrow_icon} alt="" />
                        </a>
                        {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
                            <a key={index} href="#job-list">
                                <button onClick={() => setCurrentPage(index + 1)} className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 font-medium ${currentPage === index + 1 ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg scale-110' : 'text-gray-500 bg-white border border-gray-100 hover:bg-emerald-50'}`}>{index + 1}</button>
                            </a>
                        ))}
                        <a href="#job-list">
                            <img onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))} className='p-3 bg-white border border-gray-100 shadow-sm hover:shadow-md hover:bg-emerald-50 rounded-full transition-all cursor-pointer' src={assets.right_arrow_icon} alt="" />
                        </a>
                    </div>
                )}

            </section>

        </div>
    )
}

export default JobListing