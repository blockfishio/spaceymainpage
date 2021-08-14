import type { NextPage } from 'next'
import NavBar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import LaunchSection from '../components/home/LaunchSection'
import ExploreSection from '../components/home/ExploreSection'
import DefenseSection from '../components/home/DefenseSection'
import ContactSection from '../components/home/ContactSection'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <LaunchSection />
      <ExploreSection />
      <DefenseSection />
      <ContactSection />
     <Footer mode="light" />
    </div>
    
  )
}

export default Home
