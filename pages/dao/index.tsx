import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'
import Image from 'next/image'
import daoImage1 from '../../public/images/dao_image1.png'
import daoImage2 from '../../public/images/dao_image2.png'
import daoImage3 from '../../public/images/dao_image3.png'
import openArrow from '../../public/images/ic_open@2x.png'

const Dao: NextPage = () => {
  return (
    <div>
        <div className="container mx-auto mt-20">
            <div className="flex flex-col items-center">
                <h1 className="font-bankgothic text-6xl mt-20 text-spacey-text-header">SpACE Y 2025 DAO</h1>
                <h3 className="pt-3 text-xl text-spacey-text-subheader tracking-wide">Dovern the Mars by yourselfs</h3>
                <div className="flex flex-row items-center my-20">
                    <a className="bg-spacey-vote-button px-4 py-3 rounded font-semibold mr-10" href="">
                        START VOTING
                    </a>
                    <a className="bg-spacey-learnmore-button  px-4 py-3 rounded font-semibold" href="">
                        LEARN MORE
                    </a>
                </div>
            </div>
        </div>
            <div>
                <hr className="text-spacey-learnmore-button" />
            </div>
            <div className="container mx-auto flex flex-col items-center mt-20">
                <div className=" rounded bg-spacey-form-background px-10 pt-10 pb-5">
                    <div className="flex flex-row  gap-x-10"> 
                        <div className="rounded">
                            <Image src={daoImage1} className="rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-y-10">
                            <h2 className="font-bankgothic text-2xl ">WHAT IS SPACE Y 2025 DAO</h2>    
                            <div className="">
                                protect the Mars base from being invaded by aliens
                                Use your strategies to build a Martian defense system to effectively defned against enemy.
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-center">
                        <div>
                           <Image src={openArrow} width={20} height={20} />
                        </div>
                    </div>
                  </div>
            </div>

            <div className="container mx-auto flex flex-col items-center mt-20">
                <div className=" rounded bg-spacey-form-background px-10 pt-10 pb-5">
                    <div className="flex flex-row  gap-x-10"> 
                        <div className="rounded">
                            <Image src={daoImage2} className="rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-y-10">
                            <h2 className="font-bankgothic text-2xl ">WHAT IS SPACE Y 2025 DAO</h2>    
                            <div className="">
                                protect the Mars base from being invaded by aliens
                                Use your strategies to build a Martian defense system to effectively defned against enemy.
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-center">
                        <div>
                           <Image src={openArrow} width={20} height={20} />
                        </div>
                    </div>
                  </div>
            </div>

            <div className="container mx-auto flex flex-col items-center mt-20">
                <div className=" rounded bg-spacey-form-background px-10 pt-10 pb-5">
                    <div className="flex flex-row  gap-x-10"> 
                        <div className="rounded">
                            <Image src={daoImage3} className="rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-y-10">
                            <h2 className="font-bankgothic text-2xl ">WHAT IS SPACE Y 2025 DAO</h2>    
                            <div className="">
                                protect the Mars base from being invaded by aliens
                                Use your strategies to build a Martian defense system to effectively defned against enemy.
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-center">
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
