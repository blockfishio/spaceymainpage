import React from 'react';
import Image from 'next/image'
import startExploring from '../../public/images/ic_startexploring@2x.png'

const ExploreSection =  () => {
  return (
    <section>
        <div className="container mx-auto mt-20">
             <div className="flex items-center flex-col">
                 <div>EXPLORE</div>
                 <div>Contribute to the future development of manking on Mars</div>
                 <div>Explore LANDS owned by users to experience scenes and structures Mars</div>
                 <div>
                     <a>
                         <Image src={startExploring} />
                     </a>
                 </div>
             </div>
        </div>

    </section>

  )
}

export default ExploreSection
