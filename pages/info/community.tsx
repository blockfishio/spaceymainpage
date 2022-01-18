import type { NextPage } from 'next'
import Image from 'next/image'
import withLayout from '../../hocs/withLayout'
import SideMenu from '../../components/info/SideMenu'

import arrowIcon from '../../public/images/ic_icon@2x.png'
import { FaFacebookF, FaDiscord, FaTelegramPlane, FaMediumM, FaTwitter} from "react-icons/fa"
import handIcon from '../../public/images/ic_click@2x.png'
import Link from 'next/link'
const GetSpay: NextPage = () => {

  return (
    <div>
      <div className="grid md:grid-cols-4 container mx-auto mt-10 md:mt-28 md:max-w-1064 ">
      <SideMenu active="community"  toggle={true}/>

      <div className="flex flex-row text-center justify-center md:justify-start">
              <div className=" font-bankgothic text-4xl md:text-6xl ">
              Community
              </div>
              {/* <div className="ml-4 w-8 md:w-12">
              <Image src={arrowIcon} layout="responsive" alt="arrow icon"/>
              </div> */}
          </div>


        
      </div>
      <div className="gradientBackgroundFull my-5" >
        <div className="container mx-auto py-5 flex flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 ">
              <div className="flex flex-row">
                <div className="mr-2" text-lg>
                     Spacey&apos;s Community is where our players share their fun experiences with each other!
                 </div>
               </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-5  flex flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 ">
            <div className="flex-shrink-0">
            <Image src={handIcon} width="26" height="26" alt="Hand Icon"/>  
            </div>
         
            <div>
                Let&apos;s get started to join our communities to receive the most recent news, tips and even prizes!
            </div>
        </div>
      </div>
      <div>
          <div className="container md:max-w-1064  mx-auto py-5  flex flex-row gap-x-2  w-11/12 justify-center md:justify-between flex-wrap gap-x-4 md:gap-x-0">
                <div className=" cursor-pointer  bg-spacey-form-background p-4 mt-5  md:p-10 transform transition duration-200 hover:-translate-y-2 h-full" >
                    <Link href="https://discord.com/invite/cUeNS8UzGW" passHref={true} >
                          <a target="_blank" className="text-center block"><FaDiscord size={70}/>Discord</a>
                    </Link>
                  
                </div>
                <div className="cursor-pointer bg-spacey-form-background mt-5  p-4 md:p-10 transform transition duration-200 hover:-translate-y-2 h-full text-center">
                    <Link href="https://t.me/Spacey2025" passHref={true}>
                      <a target="_blank" className="text-center block"> <FaTelegramPlane  size={70} />Telegram</a>
                    </Link>
                </div>
                <div className=" cursor-pointer bg-spacey-form-background mt-5  p-4 md:p-10 transform transition duration-200 hover:-translate-y-2 h-full"  >
                    <Link href="https://medium.com/@spacey2025" passHref={true}>
                       <a target="_blank" className="text-center block">  <FaMediumM  size={70} />Medium</a>
                    </Link>
                </div>
                <div className=" cursor-pointer bg-spacey-form-background mt-5 p-4    md:p-10 transform transition duration-200 hover:-translate-y-2 h-full" >
                <Link href="https://twitter.com/spacey2025"  passHref={true}>

                    <a target="_blank" className="text-center block">    < FaTwitter  size={70} />Twitter</a>
                    </Link>
                </div>
             
                <div className=" cursor-pointer bg-spacey-form-background mt-5 p-4  md:p-10 transform transition duration-200 hover:-translate-y-2 h-full" >
                <Link href="https://www.facebook.com/SpaceY-2025-102636005328431" passHref={true}>

                    <a target="_blank" className="text-center block"><FaFacebookF size={70} />Facebook</a>
                    </Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default withLayout(GetSpay)
