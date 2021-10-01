import type { NextPage } from 'next'
import Image from 'next/image'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import infoBuildImage from '../../public/images/info-build.jpg'


const Info: NextPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 container mx-auto mt-10 md:mt-28">
          <SideMenu active="background"  toggle={false} />
          <div className="col-span-3 p-5 md:p-0">
                <div className="flex flex-col gap-4 justify-between">
                    <h3 className=" text-4xl py-4 font-bankgothic"> Background Story</h3>
                  
                    <div>
                    Our current civilization is based on disposable fossil energy such as coal and petroleum. Although we have nuclear fission technology, heavy element fuels such as uranium and plutonium are also disposable energy sources with limited reserves. Water, solar, and wind energy alone are not enough to support our current level of civilized development. As a species and a civilization, if human beings want to survive and avoid a tragic end, they must put their sight and energy on the sea of ​​stars above their heads.
</div><div>In an alternate universe, Elan Musk is still obsessed with the goal of making humans a multiplanetary species. Because of the faster development of science and technology in this universe, he can start his Mars mission earlier. 
</div><div>In 2025, SpaceY space development company successfully established the first human activity base on Mars, and they selected elites from all walks of life as human pioneers to participate in the planetary development plan.
</div><div>While transforming the Martian environment to prepare for the future immigration goal, humans are also exploring the mysteries of the universe, the origin of mankind, and looking for evidence of the existence of higher civilizations and extraterrestrial lifes. You will face various unknown challenges here, such as the harsh environment and the extraterrestrial lives which you find out may not be friendly…

                    </div>
                </div>
                <div className="hidden md:blockmt-10">
                    <Image src={infoBuildImage} alt="information background" />
                </div>
          </div>
      </div>


    </div>
  
  )
}

export default withLayout(Info)
