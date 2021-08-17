import type { NextPage } from 'next'
import Image from 'next/image'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import buildImage from '../../public/images/ic_build@2x.png'
import fightImage from '../../public/images/ic_fight@2x.png'
import tradeImage from '../../public/images/ic_trade_info@2x.png'
import upgradeImage from '../../public/images/ic_upgrade@2x.png'
import exploreSmall from '../../public/images/explore_small.png'

const Info: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 container mx-auto mt-28">
          <SideMenu active="home" />
          <div className="col-span-3">
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

      <div className="gradientBackground mt-20">
        <div className="container mx-auto grid grid-cols-4">
            <div>

            </div>
            <div className="col-span-3">
            <h3 className="font-bankgothic text-4xl py-4"> ABOUT Space Y 2025</h3>
            </div>
        </div>
      </div>
      <div>
      
        <div className="container mx-auto grid grid-cols-4 mt-10">
            <div>

            </div>
            <div className="col-span-3">
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
  
  )
}

export default withLayout(Info)
