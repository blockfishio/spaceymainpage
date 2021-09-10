import type { NextPage } from 'next'
import NavBar from '../components/common/Navbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import LaunchSection from '../components/home/LaunchSection'
import ExploreSection from '../components/home/ExploreSection'
import DefenseSection from '../components/home/DefenseSection'
import ContactSection from '../components/home/ContactSection'
import TradeSection from '../components/home/TradeSection'

const Home: NextPage = () => {
  return (
    <div className="text-spacey-white">
      <Header title="Spacey Home Page" />
      <div className="bg-hero-image-mobile bg-center md:bg-hero-image lg:bg-hero-image-lg overflow-hidden bg-cover ">
      <NavBar mode="light" />
      <LaunchSection />
      </div>
      <ExploreSection />
      <DefenseSection />
      <TradeSection />
      <ContactSection />
     <Footer mode="light" />
    </div>
    
  )
}

export default Home
