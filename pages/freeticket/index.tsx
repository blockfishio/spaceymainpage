import type { NextPage } from 'next'
import Image from 'next/image'
import withLayout from '../../hocs/withLayout'
import ticketImage from '../../public/images/ic_ticket@2x.png'

const FreeTicket: NextPage = () => {
  return (
    <div className="flex-row flex mt-32 gap-x-6">
       <div className="flex flex-col items-center">
             <div className="pl-10 mb-5 text-3xl">
                <h1 className="font-bankgothic flex-grow-0">
                    SPREAD THE WORD &
                </h1>
                <h1 className="font-bankgothic flex-grow-0 pl-20">
                     CLAIM TOUR FREETIVKET
                </h1>
              </div>
              <div className="gradientBackground2 p-4 w-full">
                  <span className="opacity-50"> 
                     This is just a preview of the NFT Tickets that can be purchased
                </span>
              </div>
               <div className="mt-10 ">
                   <div className="font-bankgothic bg-spacey-form-background p-10 overflow-hidden text-xl">
                        <form>
                        <div className="mb-3"> 
                           <input placeholder="NAME" className="rounded pl-4 py-2 bg-spacey-form-input-background text-spacey-form-text"/>
                        </div>
                        <div className="mb-8">  
                            <input placeholder="EMAIL"  className="rounded pl-4 py-2 bg-spacey-form-input-background text-spacey-form-text"/>
                        </div>
                        <div >  
                           <button className=" rounded w-full pl-4 py-2 border-spacey-form-border border-2 text-spacey-form-text">Claim your free ticket</button>
                        </div>
                        </form>
                    </div>
              </div>
        </div>
        <div className="bg-astro-background flex-1 bg-cover flex flex-col items-center justify-center">
            <div className="m-5">
           <Image src={ticketImage} />
           </div>
        </div>
    </div>
  )
}

export default withLayout(FreeTicket)
