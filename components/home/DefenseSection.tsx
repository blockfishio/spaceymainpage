import React from 'react';
import startDefense from '../../public/images/ic_defend@2x.png'
import defenseButton from '../../public/images/ic_startDEFENSE@2x.png'
import Image from 'next/image'

const DefenseSection =  () => {
  return (
    <section>
        <div className=" mx-auto mt-10">
            <div className="flex flex-rows">
              <div className="bg-defense-image-mobile lg:bg-defense-image bg-left-top min-h-full w-3/5 bg-cover">
                 
              </div>
              <div className="bg-defense-right-background  bg-cover bg-right md:bg-left items-center my-10  flex-1 px-5 -ml-40  py-10 md:p-20">
                  <div className="mx-auto w-7/12 md:w-5/12 h-auto">
                      <Image src={startDefense} alt="Start Defense" layout="responsive"/>
                      <hr className="mt-2 w-40 text-spacey-underline bg-spacey-underline h-0.5"  />
                  </div>
                  <div className="mt-20 w-200 text-center opacity-70 text-xl">
                      Use your strategies to build a Martian defense system 
                      to effectively defend against enemy invasion
                  </div>
                 <div className="mt-20 mb-20  mx-auto  w-10/12 md:w-7/12 h-auto">
                     <Image src={defenseButton} alt="Defense" layout="responsive"/>
                 </div>
                 
              </div>
            </div>
      
            
        </div>
    </section>

  )
}

export default DefenseSection
