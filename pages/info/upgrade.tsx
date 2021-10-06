import type { NextPage } from 'next'
import Image from 'next/image'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import infoBuildImage from '../../public/images/info-build.jpg'


const Info: NextPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 container mx-auto mt-10 md:mt-28 md:max-w-1064 ">
          <SideMenu active="upgrade"  toggle={true} />
          <div className="col-span-3 p-5 md:p-0">
                <div className="flex flex-col gap-4 justify-between">
                    <h3 className=" text-4xl py-4 font-bankgothic"> Upgrade</h3>
                  
                    <div>
                    Killing aliens gains resources that are used to build and upgrade towers which can be sold at a loss. Tower upgrades increase various statistics including fire power and range.

                    </div>
                </div>
                <div className="hidden md:blockmt-10">
                    <Image src={infoBuildImage} alt="Build Information" />
                </div>
          </div>
      </div>


    </div>
  
  )
}

export default withLayout(Info)
