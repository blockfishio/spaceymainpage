import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SideMenu from '../../components/info/SideMenu'
import withLayout from '../../hocs/withLayout'
import marketPlaceImage from '../../public/images/marketplace.png'

const Info: NextPage = () => {
  return (
    <div>
    <div className="grid md:grid-cols-4 container mx-auto mt-10 md:mt-28">
        <SideMenu active="build" toggle={false} />
        <div className="col-span-3 p-5 md:p-0">
              <div className="flex flex-col gap-4 justify-between">
                  <h3 className=" text-4xl py-4 font-bankgothic">The Marketplace </h3>
                  <div>
                     <div>
                       Select <b>Market</b> to see all the items that are on Sale.

                        <ul className="list-disc pl-5">
                          <li className="mt-5 mb-5">Select the <b>Category</b> to view only a specific type of item .</li>
                          <li className="mb-5"><b>Order</b> them by different criteria like recently listed, cheapest, etc.</li>
                          <li className="mb-5">Toggle <b>On sale</b> off to view items that aren’t for sale.</li>
                          <li className="mb-5"><b>Filter</b> items by name to find something specific.</li>
                        </ul>
                     </div>
                   </div>
              </div>
              <div className="block mt-10">
                  <Image src={marketPlaceImage} layout="responsive" />
              </div>
        </div>
    </div>


  </div>
  )
}

export default withLayout(Info)
