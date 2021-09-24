import React from 'react';
import Image from 'next/image'
import startBrowsing from '../../public/images/ic_startBROWSING@2x.png'
import astroImage from '../../public/images/astro_mobile.jpg'
import tradeImage from '../../public/images/ic_trade@2x.png'
import Link from 'next/link'

const TradeSection =  () => {
  return (
    <section className="bg-spacey-black-background h-120 md:h-192  flex items-center justify-center">
        <div className="container mx-auto py-52">
          <div className="grid grid-cols-2 pl-5 pr-5 md:pr-0 md:gap-2 self-center ">
             <div className="flex flex-col justify-between">
                 <div className="pb-10  w-48 md:w-80 h-auto">
                   <Image src={tradeImage} layout="responsive"/>
                 </div>
                 <div className="text-lg lg:text-xl">
                  <div className=" mb-10 md:mb-10 lg:mb-10">Exchange your Martian assets with other players</div>
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
               <div className="bg-astro-background-mobile md:hidden bg-cover bg-center-right md:bg-right h-full ml-5">

               </div>
              </div>
          </div>

          <div className="mt-10 md:mt-20 md:hidden">
                   <div className="mx-auto w-7/12  w-64 md:w-80 h-auto">
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
