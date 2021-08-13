import type { NextPage } from 'next'
import NavBar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import LaunchSection from '../components/home/LaunchSection'
import DefenseSection from '../components/home/LaunchSection'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <LaunchSection />
      <DefenseSection />
     <div>This is atest 22</div>
     <div className="box-border h-32 w-32 p-4 border-4"></div>
     <Footer mode="light" />
    </div>
    
  )
}

export default Home
