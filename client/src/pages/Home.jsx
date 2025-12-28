import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import JobAlert from '../components/JobAlert'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobListing />
      <JobAlert />
      <Footer />
    </div>
  )
}

export default Home