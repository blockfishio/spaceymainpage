import React from 'react';
import Image from 'next/image'
import startLaunch  from '../../public/images/ic_launch@2x.png'

const LaunchSection =  () => {
  return (
    <section>
        <div className="container mx-auto mt-20 pt-20">
            <div className="flex flex-rows justify-center mt-20">
                <div className="w-11/12">
                    <div className="font-bankgothic text-8xl">MARS &</div>
                    <div className="flex flex-rows flex-wrap items-center">
                         <div className="w-40">COLONY MARS with THE POWER OF BLOCK CHAIN</div> <div className="font-bankgothic text-8xl">BLOCKCHAIN</div>
                    </div>
                 
                </div>
            </div>
        </div>
        <div className="gradientBackground p-10  mt-20">
            <div className="container mx-auto ">
                <div className="flex flex-rows justify-center">
                    <div className="w-11/12">
                        <div className="w-96">
                        Purchase your SpaceY Boardding Pass to get early access to the grand exploring on Mars
                        </div>
                </div>
               </div>
            </div>
        </div>
        <div className="container mx-auto mt-20 mb-20 overflow-hidden">   
            
            <div className="float-right"> 
                <a href="/">
                    <Image src={startLaunch} width="420" height="140"></Image>
                </a>
            </div>
        </div>
    </section>

  )
}

export default LaunchSection
