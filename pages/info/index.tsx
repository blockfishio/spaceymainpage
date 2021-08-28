import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import buildImage from '../../public/images/ic_build@2x.png'
import fightImage from '../../public/images/ic_fight@2x.png'
import tradeImage from '../../public/images/ic_trade_info@2x.png'
import upgradeImage from '../../public/images/ic_upgrade@2x.png'
import exploreSmall from '../../public/images/explore_small.png'
import infoImage1 from '../../public/images/mobile_info_1.png'
import infoImage2 from '../../public/images/mobile_info_2.png'
import infoImage3 from '../../public/images/mobile_info_3.png'
import infoImage4 from '../../public/images/mobile_info_4.png'

const Info: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto mt-10  md:mt-28 ">
          <SideMenu active="home" />
          <div className="md:col-span-3 hidden md:block">
                <div className="flex flex-row gap-4 justify-between">
                    
                  <div className="">
                      <Image src={buildImage} />
                  </div>

                  <div>
                      <Image src={fightImage} />
                  </div>

                  <div>
                      <Image src={upgradeImage} />
                  </div>

                  <div>
                      <Image src={tradeImage} />
                  </div>

                </div>
          </div>
      </div>
      {/** desktop version  */}
      <div className="hidden md:block">
        <div className="gradientBackgroundLx mt-10 md:mt-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4">
              <div>

              </div>
              <div className="md:col-span-3">
              <h3 className="font-bankgothic text-4xl py-4"> ABOUT Space Y 2025</h3>
              </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 mt-10">
              <div>

              </div>
              <div className="md:col-span-3">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, 
                a Latin professor at Hampden-Sydney College in Virginia, 
                looked up one of the more obscure Latin words, consectetur,
                from a Lorem Ipsum passage, 
                and going through the cites of the word in classical literature, 
                discovered the undoubtable source. <div className="float-right pl-2 pt-5" >
                        <Image src={exploreSmall}  className="float-right" width="400" height="350"/>
                        </div>
                  Lorem Ipsum comes from sections 1.10.32 
                  and 1.10.33 of  (The Extremes of Good and Evil) 
                  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
                
                  </div>
          </div>
        </div>
      </div>

        {/** mobile version  */}
        <div className="flex flex-col md:hidden gap-y-10 justify-center mt-20 px-10">
           <div className="font-bankgothic text-4xl text-center tracking-wide">
              SPACEY 2025 INFORMATION 
           </div>
           <div className="opacity-90 text-center px-10">
                Find help about the various topics in each of these sections
           </div>
           <div>
             <div className="grid grid-cols-2 gap-5">
               <div >
                 <Link href="/info">
                  <Image className="rounded-xl" src={infoImage1} layout="responsive" />
                  </Link>

                  <div className="opacity-90 mt-4">Home</div>
                  <div className="opacity-70 text-sm">General info for players</div>
               </div>
               <div>
               <Link href="/info">
                <Image className="rounded-xl" src={infoImage2} layout="responsive"/>
               </Link>
               <div className="opacity-90 mt-4">Background Story</div>
                  <div  className="opacity-70 text-sm">Read interesting stories behind this game.</div>
               </div>
             </div>
             <div className="grid grid-cols-2 mt-10  gap-5">
              <div>
              <Link href="/info/build">
                 <Image className="rounded-xl" src={infoImage3} layout="responsive"/>
              </Link>
                  <div className="opacity-90 mt-4">Gameplay</div>
                  <div  className="opacity-70 text-sm">Learn some basic playing techniques</div>
              </div>
              <div>
              <Link href="/info">
                <Image className="rounded-xl" src={infoImage4} layout="responsive"/>
              </Link>
                  <div className="opacity-90 mt-4" >Trade</div>
                  <div className="opacity-70 text-sm">Learn how to trade exclusive tokens.</div>
              </div>
             </div>
           </div>
        </div>
    </div>
  
  )
}

export default withLayout(Info)
