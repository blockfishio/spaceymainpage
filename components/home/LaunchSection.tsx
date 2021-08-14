import React from 'react';
import Image from 'next/image'
import startLaunch  from '../../public/images/ic_launch@2x.png'

const LaunchSection =  () => {
  return (
    <section>
        <div className="container mx-auto mt-20">
            <div>MARS &</div>
            <div>COLONY MARS with THE POWER OF BLOCK CHAIN</div>
            <div>BLOCK CHAIN</div>
        </div>
     
        <div className="container mx-auto mt-20">
        <div>
            Purchase your SpaceY Boardding Pass to get early access to the grand exploring on Mars
        </div>
            <div>
                <a href="/">
                    <Image src={startLaunch}></Image>
                </a>
            </div>
        </div>
    </section>

  )
}

export default LaunchSection
