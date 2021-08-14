import type { NextPage } from 'next'
import Image from 'next/image'
import withLayout from '../../hocs/withLayout'
import panCakesSwap from '../../public/images/ic_pancakeswap@2x.png'
import uniSwamp from '../../public/images/ic_uniswap@2x.png'

const GetSpay: NextPage = () => {
  return (
    <div className="mt-20 container mx-auto">
     <div>
         <h1> GET SPAY</h1>
     </div>
     <div>
         SPAY ADDRESS 0sd080asd8gxlcjlkjdlasjkdgljs 
     </div>
     <div>
         You can purchase SPAY on: 
     </div>
     <div>

     </div>
     <div className="flex flex-row">
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
