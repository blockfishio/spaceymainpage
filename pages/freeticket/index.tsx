
import {useState, useRef} from 'react'
import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'
import ImageCanvas from '../../components/freetickets/ImageCanvas'

const FreeTicket: NextPage = () => {

  const [name, setName] = useState("")
  const inputBox = useRef<HTMLInputElement>(null)
  const emailBox = useRef<HTMLInputElement>(null)

  return (
    <div className="flex flex-col md:flex-row mt-32 gap-x-6">
       <div className="flex flex-col items-center">
             <div className="pl-10 mb-5 hidden md:block text-3xl">
                <h1 className="font-bankgothic flex-grow-0">
                    SPREAD THE WORD &
                </h1>
                <h1 className="font-bankgothic flex-grow-0 pl-20">
                     CLAIM TOUR FREETIVKET
                </h1>
              </div>

              <div className=" mb-10 md:hidden text-2xl text-center">
                <h1 className="font-bankgothic flex-grow-0">
                    SPREAD THE WORD 
                </h1>
                <h1>
                    &
                </h1>
                <h1 className="font-bankgothic flex-grow-0">
                     CLAIM TOUR FREETIVKET
                </h1>
              </div>

              <div className="gradientBackground2 p-4 w-full">
                  <span className="opacity-50"> 
                     This is just a preview of the NFT Tickets that can be purchased
                </span>
              </div>
               <div className="mt-10 ">
                   <div className="font-bankgothic md:bg-spacey-form-background p-10 overflow-hidden text-xl">
                       
                        <div className="mb-3"> 
                           <input ref={inputBox} placeholder="NAME" className="rounded pl-4 py-2 bg-spacey-form-input-background text-spacey-form-text"/>
                        </div>
                        <div className="mb-8">  
                            <input placeholder="EMAIL" ref={emailBox} className="rounded pl-4 py-2 bg-spacey-form-input-background text-spacey-form-text"/>
                        </div>
                        <div >  
                           <button className=" rounded w-full pl-4 py-2 border-spacey-form-border border-2 text-spacey-form-text"
                                   onClick={() => {
                                       if(inputBox.current){
                                        setName(inputBox.current.value)
                                        inputBox.current.value = ""

                                        if (emailBox.current) {
                                            emailBox.current.value = ""
                                        }
                                       }
                                       else 
                                         setName("")
                                        
                                       return false
                                   }}
                           >
                               Claim your free ticket
                            </button>
                        </div>
                    </div>
              </div>
        </div>
        <div className="bg-astro-background flex-1 bg-cover grid grid-cols-1 items-center justify-center">
           
           <div className="m-5 justify-self-stretch ">
              <ImageCanvas title={name} />
           </div>
        </div>
        
    </div>
  )
}

export default withLayout(FreeTicket)
