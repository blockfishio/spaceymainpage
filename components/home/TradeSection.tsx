import React from 'react';
import Image from 'next/image'
import startBrowsing from '../../public/images/ic_startBROWSING@2x.png'
import astroImage from '../../public/images/astro.jpg'
import tradeImage from '../../public/images/ic_trade@2x.png'
import Link from 'next/link'

const TradeSection =  () => {
  return (
    <section className="bg-spacey-black-background">
        <div className="container mx-auto mt-10 py-20">
          <div className="flex flex-row">
             <div className="flex  flex-col flex-initial pr-10">
                 <div>
                   <Image src={tradeImage} width="340" height="60" />
                 </div>
                 <div className="">
                  <div className="mt-20">Exchange your Martian assets with other players</div>
                  <div>Buy and sell LANDS, buildings, towers and ores in Space Y Marketplace</div>
                 </div>
                 <div className="mt-20">
                   <Link href="/">
                     <a>
                         <Image src={startBrowsing} width="420" height="140"/>
                     </a>
                     </Link>
                 </div>
             </div>
             <div className="flex-1">
               <Image src={astroImage} layout="responsive" />
              </div>
          </div>
        </div>

    </section>

  )
}

export default TradeSection
