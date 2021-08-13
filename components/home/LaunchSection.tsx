import React from 'react';
import startDefense from '../../public/images/ic_defend@2x.png'
import Image from 'next/image'

const LaunchSection =  () => {
  return (
    <section>
        <div className="container mx-auto">
            <Image src={startDefense} alt="Start Defense" />
            <div className="box-border h-32 w-32 p-4 border-4"></div>
        </div>
    </section>

  )
}

export default LaunchSection
