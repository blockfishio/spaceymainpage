import React from 'react';
import Image from 'next/image'
import startBrowsing from '../../public/images/ic_startBROWSING@2x.png'
import astroImage from '../../public/images/astro_mobile.jpg'
import tradeImage from '../../public/images/ic_trade@2x.png'
import Link from 'next/link'

const TradeSection =  () => {
  return (
    <section className="bg-spacey-black-background">
        <div className="container mx-auto mt-10 py-20">
          <div className="grid grid-cols-2 pl-5 md:gap-2">
             <div className="flex flex-col flex-initial">
                 <div className="pb-10 w-7/12 md:w-5/12 h-auto">
                   <Image src={tradeImage} layout="responsive"/>
                 </div>
                 <div className="opacity-70 ">
                  <div className="md:mt-20 mb-10 md:mb-5">Exchange your Martian assets with other players</div>
                  <div>Buy and sell LANDS, buildings, towers and ores in Space Y Marketplace</div>
                 </div>
                 <div className="mt-10 md:mt-20 hidden md:block">
                   <div className=" w-7/12  xl:w-6/12 h-auto">
                   <Link href="/">
                     <a>
                         <Image src={startBrowsing} layout="responsive"/>
                     </a>
                     </Link>
                     </div>
                 </div>
             </div>
             <div >
               <div className=" hidden md:block h-auto w-full ">
                     <Image src={astroImage} layout="responsive" />
               </div>
               <div className="bg-astro-background-mobile md:hidden bg-cover bg-right h-full ml-5">

               </div>
              </div>
          </div>

          <div className="mt-10 md:mt-20 md:hidden">
                   <div className="md:float-right w-7/12 md:w-4/12 xl:w-3/12 h-auto">
                   <Link href="/">
                     <a>
                         <Image src={startBrowsing} layout="responsive"/>
                     </a>
                     </Link>
                     </div>
                 </div>
        </div>

    </section>

  )
}

export default TradeSection
