import React from 'react';
import Image from 'next/image'
import exploringTitle from '../../public/images/ic_explore@2x.png'
import startExploring from '../../public/images/ic_startexploring@2x.png'
import Link from 'next/link'

const ExploreSection =  () => {
  return (
    <section>
        <div className="bg-explore-image bg-center bg-cover h-192">
            <div className="container mx-auto pt-40">
                <div className="flex items-center flex-col">
                    <div className="pb-10 mx-auto w-64 md:w-80 h-auto">
                        <Image src={exploringTitle} layout="responsive" />
                    </div>
                    <div className="text-center text-xl tracking-wide px-5">
                        <div className="mb-5 opacity-80">Contribute to the future development of manking on Mars</div>
                        <div>Explore LANDS owned by users to experience scenes and structures Mars</div>
                    </div>
                    <div className="mt-20 mb-20  mx-auto   w-64 md:w-80 h-auto">
                        <Link href="/">
                        <a>
                            <Image src={startExploring} layout="responsive" />
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ExploreSection
