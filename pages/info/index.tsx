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
          <SideMenu active="home"  toggle={false}/>
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
              A maze tower defense game combined with open-world RPG features built on the Blockchain. Use NFTs to develop and defend the human base on Mars. While overcoming unknown challenges, revealing the secret of our universe.
By contributing to space exploration, you will be rewarded with tokens as the in-game currency.
Earth is the cradle of human civilization, and the cradle is always fragile. For the continuation of human civilization, we must plan ahead. Mankind is bound to step out of the cradle to continue to evolve. Diving into the deep space of the universe is a problem we will face sooner or later. 
Come join us as one of the human pioneers.
 {/* <div className="float-right pl-2 pt-5" >
                        <Image src={exploreSmall}  className="float-right" width="400" height="350"/>
                        </div> */}
                
                  </div>
          </div>
        </div>
      </div>

        {/** mobile version  */}
        <div className="flex flex-col md:hidden gap-y-10 justify-center mt-20 ">
           <div className="font-bankgothic text-3xl text-center tracking-wide">
              SPACEY 2025 INFORMATION 
           </div>
           <div className="opacity-90 text-center px-5">
                Find help about the various topics in each of these sections
           </div>
           <div>
             <div className="grid grid-cols-2 gap-5 px-5">
               <div >
                 <Link href="/info">
                  <Image className="rounded-xl" src={infoImage1} layout="responsive" />
                  </Link>

                  <div className="opacity-90 mt-4">Home</div>
                  <div className="opacity-70 text-sm">General info for players</div>
               </div>
               <div>
               <Link href="/info/fight">
                <Image className="rounded-xl" src={infoImage2} layout="responsive"/>
               </Link>
               <div className="opacity-90 mt-4">Background Story</div>
                  <div  className="opacity-70 text-sm">Read interesting stories behind this game.</div>
               </div>
             </div>
             <div className="grid grid-cols-2 mt-10  gap-5 px-5">
              <div>
              <Link href="/info/background">
                 <Image className="rounded-xl" src={infoImage3} layout="responsive"/>
              </Link>
                  <div className="opacity-90 mt-4">Gameplay</div>
                  <div  className="opacity-70 text-sm">Learn some basic playing techniques</div>
              </div>
              <div>
              <Link href="/market">
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
