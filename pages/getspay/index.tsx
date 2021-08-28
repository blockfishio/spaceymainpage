import type { NextPage } from 'next'
import Image from 'next/image'
import withLayout from '../../hocs/withLayout'
import panCakesSwap from '../../public/images/ic_pancakeswap@2x.png'
import uniSwamp from '../../public/images/ic_uniswap@2x.png'
import arrowIcon from '../../public/images/ic_icon@2x.png'
import addressIcon from '../../public/images/ic_address@2x.png'
import handIcon from '../../public/images/ic_click@2x.png'

const GetSpay: NextPage = () => {
  return (
    <div>
      <div className="mt-32 container mx-auto">
        <div className="flex flex-row text-center justify-center md:justify-start">
            <div className=" font-bankgothic text-4xl md:text-6xl ">
              GET SPAY
              </div>
              <div className="ml-4 w-8 md:w-12">
              <Image src={arrowIcon} layout="responsive"/>
              </div>
        </div>
      </div>
      <div className="gradientBackgroundFull my-5" >
        <div className="container mx-auto py-5 flex flex-row gap-x-2  w-11/12 md:w-full">
              <Image src={addressIcon} width="26" height="26" />  
              <div><span className="text-spacey-grey mr-2">SPAY Adress:</span> 0sd080asd8gxlcjlkjdlasjkdgljs 
              </div>
        </div>
      </div>
      <div>
      <div className="container mx-auto py-5  flex flex-row gap-x-2  w-11/12 md:w-full">
          <Image src={handIcon} width="26" height="26" />  
          <div><span className="text-spacey-grey mr-2"></span> You can purchase SPAY on: 
          </div>
      </div>
      </div>
      <div>

      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-x-10 mt-5 gap-y-10 w-11/12 md:w-full">
          <div>
              <Image src={panCakesSwap} />
          </div>
          <div>
              <Image src={uniSwamp} />
          </div>
      </div>
    </div>
  )
}

export default withLayout(GetSpay)
