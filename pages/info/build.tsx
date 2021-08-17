import type { NextPage } from 'next'
import Image from 'next/image'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import infoBuildImage from '../../public/images/info-build.jpg'


const Info: NextPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 container mx-auto mt-28">
          <SideMenu active="build" />
          <div className="col-span-3">
                <div className="flex flex-col gap-4 justify-between">
                    <h3 className=" text-4xl py-4"> Build</h3>
                  
                    <div>
                    The shoes had been there for as long as anyone could remember. 
                    In fact, it was difficult for anyone to come up with a date they had first appeared. 
                    It had seemed they'd always been there and yet they seemed so out of place.
                     Why nobody had removed them was a question that had been asked time and again, 
                     but while they all thought it, nobody had ever found the energy to actually do it. 
                     So, the shoes remained on the steps, out of place in one sense,
                      but perfectly normal in another.
                    </div>
                </div>
                <div className="mt-10">
                    <Image src={infoBuildImage} />
                </div>
          </div>
      </div>


    </div>
  
  )
}

export default withLayout(Info)
