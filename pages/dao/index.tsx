import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'
import Image from 'next/image'
import Link from 'next/link'
import daoImage1 from '../../public/images/dao_image1.png'
import daoImage2 from '../../public/images/dao_image2.png'
import daoImage3 from '../../public/images/dao_image3.png'
import openArrow from '../../public/images/ic_open@2x.png'

const Dao: NextPage = () => {
  return (
    <div>
        <div className="container mx-auto mt-20">
            <div className="flex flex-col items-center">
                <h1 className="font-bankgothic text-center px-10 md:px-0 md:text-left  text-4xl md:text-6xl mt-20 text-spacey-text-header">SpACE Y 2025 DAO</h1>
                <h3 className="pt-10 md:pt-3 text-xl text-spacey-text-subheader tracking-wide">Dovern the Mars by yourselfs</h3>
                <div className="flex flex-col md:flex-row items-center mt-10 mb-20 mb:my-20 gap-y-5 md:gap-x-5 w-full justify-center" >
                    <div className="mb-5 md:mb-0 w-8/12 md:w-auto">
                    <Link href="/dao/proposal">
                    <a className="bg-spacey-vote-button px-4 py-3 rounded font-semibold  w-full block text-center" >
                        START VOTING
                    </a>
                    </Link>
                    </div>
                    <div className="w-8/12 md:w-auto">
                    <Link href="/dao" >
                    <a className="bg-spacey-learnmore-button  px-4 py-3 rounded font-semibold w-full block text-center" href="">
                        LEARN MORE
                    </a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
            <div>
                <hr className="text-spacey-learnmore-button" />
            </div>
            <div className="container mx-auto flex flex-col items-center mt-10 md:mt-20">
                <div className="rounded bg-spacey-form-background px-5 md:px-10 pt-10 pb-5">
                    <div className="flex flex-row  gap-x-10 "> 
                        <div className="rounded w-9/12 md:w-auto">
                            <Image src={daoImage1} className="rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-y-5 md:gap-y-10">
                            <h2 className="font-bankgothic md:text-2xl ">WHAT IS SPACE Y 2025 DAO</h2>    
                            <div className="text-sm md:text-base">
                                protect the Mars base from being invaded by aliens
                                Use your strategies to build a Martian defense system to effectively defned against enemy.
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-center mt-10 md:mt-0">
                        <div>
                           <Image src={openArrow} width={20} height={20} />
                        </div>
                    </div>
                  </div>
            </div>

            <div className="container mx-auto flex flex-col items-center mt-10 md:mt-20">
                <div className="rounded bg-spacey-form-background px-5 md:px-10 pt-10 pb-5">
                    <div className="flex flex-row  gap-x-10 "> 
                        <div className="rounded w-9/12 md:w-auto">
                            <Image src={daoImage1} className="rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-y-5 md:gap-y-10">
                            <h2 className="font-bankgothic md:text-2xl ">WHAT IS SPACE Y 2025 DAO</h2>    
                            <div className="text-sm md:text-base">
                                protect the Mars base from being invaded by aliens
                                Use your strategies to build a Martian defense system to effectively defned against enemy.
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-center mt-10 md:mt-0">
                        <div>
                           <Image src={openArrow} width={20} height={20} />
                        </div>
                    </div>
                  </div>
            </div>

        <div className="container mx-auto flex flex-col items-center mt-10 md:mt-20">
                <div className="rounded bg-spacey-form-background px-5 md:px-10 pt-10 pb-5">
                    <div className="flex flex-row  gap-x-10 "> 
                        <div className="rounded w-9/12 md:w-auto">
                            <Image src={daoImage1} className="rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-y-5 md:gap-y-10">
                            <h2 className="font-bankgothic md:text-2xl ">WHAT IS SPACE Y 2025 DAO</h2>    
                            <div className="text-sm md:text-base">
                                protect the Mars base from being invaded by aliens
                                Use your strategies to build a Martian defense system to effectively defned against enemy.
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-center mt-10 md:mt-0">
                        <div>
                           <Image src={openArrow} width={20} height={20} />
                        </div>
                    </div>
                  </div>
            </div>
   
    </div>
  )
}

export default withLayout(Dao)
