import type { NextPage } from 'next'
import Image from 'next/image'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import infoBuildImage from '../../public/images/info-build.jpg'


const Info: NextPage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 container mx-auto mt-10 md:mt-28">
          <SideMenu active="build" toggle={true} />
          <div className="col-span-3 p-5 md:p-0">
                <div className="flex flex-col gap-4 justify-between">
                    <h3 className=" text-4xl py-4 font-bankgothic"> Build</h3>
                  
                    <div>
                    The finite, traversable, 3D virtual space within SpaceY 2025 is called Island, a non-fungible digital asset maintained in an Ethereum smart contract. Each Island has its own serial Tag (e.g. A, 0). These Islands are permanently owned by players in SpaceY 2025 and are purchased using SPAY, SpaceY’s crypto currency token.
</div><div>This allows players to place construction NFTs on the Island, and different construction NFTs will give players different advantages during the gameplay.

                    </div>
                </div>
                <div className="hidden md:blockmt-10">
                    <Image src={infoBuildImage} alt="build information" />
                </div>
          </div>
      </div>


    </div>
  
  )
}

export default withLayout(Info)
