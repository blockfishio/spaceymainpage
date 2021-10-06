import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import withLayout from '../../hocs/withLayout'
import panCakesSwap from '../../public/images/ic_pancakeswap@2x.png'
import uniSwamp from '../../public/images/ic_uniswap@2x.png'
import arrowIcon from '../../public/images/ic_icon@2x.png'
import addressIcon from '../../public/images/ic_address@2x.png'
import handIcon from '../../public/images/ic_click@2x.png'

const GetSpay: NextPage = () => {
  return (
    <div>
      <div className="mt-32 container mx-auto md:max-w-1064 ">
        <div className="flex flex-row text-center justify-center md:justify-start">
            <div className=" font-bankgothic text-4xl md:text-6xl ">
              GET SPAY
              </div>
              <div className="ml-4 w-8 md:w-12">
              <Image src={arrowIcon} layout="responsive" alt="arrow icon" />
              </div>
        </div>
      </div>
      <div className="gradientBackgroundFull my-5" >
        <div className="container mx-auto py-5 flex flex-col md:flex-row gap-x-2  w-11/12 md:w-full">
              <div className="flex flex-row">
                <div className="mr-2">
                   <Image src={addressIcon} width="26" height="26" alt="Address Icon" />  
                 </div>
                 <div>
                    <span className="text-spacey-grey mr-2">SPAY Contract Adress:</span> 
                 </div>
               </div>
               <div className=" mx-auto mt-3 md:mt-0 md:mx-0">
                 <div>0xc0ffee254729296a45a3885639AC7E10F9d54979 (ETH) </div>
                 <div>0xc0ffee254729adga5a388563asdgE10Fadddsd79 (BTC)</div>
                </div>
        </div>
      </div>
      <div>
      <div className="container mx-auto py-5  flex flex-row gap-x-2  w-11/12 md:w-full">
          <Image src={handIcon} width="26" height="26" alt="hand icon" />  
          <div><span className="text-spacey-grey mr-2"></span> You can purchase SPAY on: 
          </div>
      </div>
      </div>
      
      <div>

      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-x-10 mt-5 gap-y-10 w-11/12 md:w-full cursor-pointer">
          <div>
            <div className="transform transition duration-200 hover:-translate-y-2 block">
            <Link href="https://pancakeswap.finance" >
              <a target="_blank">
              <Image src={panCakesSwap} alt="PanCakseSwap" />
              </a>
              </Link>
             </div>
          </div>
          <div>
            <div  className="transform transition duration-200 hover:-translate-y-2 block">
            <Link href="https://uniswap.org/">
            <a target="_blank">
              <Image src={uniSwamp} alt="UniSwamp" />
              </a>
             </Link>
             </div>
          </div>
      </div>
    </div>
  )
}

export default withLayout(GetSpay)
