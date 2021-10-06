import type { NextPage } from 'next'
import Image from 'next/image'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import infoBuildImage from '../../public/images/info-build.jpg'


const Info: NextPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 container mx-auto mt-10 md:mt-28 md:max-w-1064 ">
          <SideMenu active="fight"  toggle={true}/>
          <div className="col-span-3 p-5 md:p-0">
                <div className="flex flex-col gap-4 justify-between">
                    <h3 className=" text-4xl py-4 font-bankgothic"> Fight</h3>
                  
                    <div>
                    Use your tower NFTs to defend the human base on Mars.
</div><div>You have the ability to build various towers that attack and route the path for the waves of enemies. And different towers provide various abilities that are good against different types of enemies, so placing your defensive constructions smartly to prevent endless and unknown enemies from attacking and stealing resources.
</div><div>The longer you persist, the more generous the reward will be.

                    </div>
                </div>
                <div className="hidden md:blockmt-10">
                    <Image src={infoBuildImage} alt="fight information" />
                </div>
          </div>
      </div>


    </div>
  
  )
}

export default withLayout(Info)
