import React from 'react';
import Image from 'next/image'
import exploringTitle from '../../public/images/ic_explore@2x.png'
import startExploring from '../../public/images/ic_startexploring@2x.png'

const ExploreSection =  () => {
  return (
    <section>
        <div className="bg-explore-image bg-cover">
            <div className="container mx-auto pt-40">
                <div className="flex items-center flex-col">
                    <div className="pb-10">
                        <Image src={exploringTitle} width="420" height="60" />
                    </div>
                    <div className="text-center text-xl tracking-wide">
                        <div className="mb-5">Contribute to the future development of manking on Mars</div>
                        <div>Explore LANDS owned by users to experience scenes and structures Mars</div>
                    </div>
                    <div className="mt-20 mb-20">
                        <a>
                            <Image src={startExploring} width="420" height="140" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ExploreSection
