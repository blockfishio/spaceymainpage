import React from 'react';
import Image from 'next/image'
import startBrowsing from '../../public/images/ic_startBROWSING@2x.png'

const TradeSection =  () => {
  return (
    <section>
        <div className="container mx-auto mt-20">
             <div className="flex items-center flex-col">
                 <div>Trade</div>
                 <div>Exchange your Martian assets with other players</div>
                 <div>Buy and sell LANDS, buildings, towers and ores in Space Y Marketplace</div>
                 <div>
                     <a>
                         <Image src={startBrowsing} />
                     </a>
                 </div>
             </div>
        </div>

    </section>

  )
}

export default TradeSection
