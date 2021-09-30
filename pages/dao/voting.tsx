import type { NextPage } from 'next'
import Image from 'next/image'
import withLayout from '../../hocs/withLayout'
import DaoTab from '../../components/dao/tab'
import Link from 'next/link'
import totalIcon from "../../public/images/ic_total@2x.png"
import landIcon from "../../public/images/ic_lands@2x.png"
import {FaToggleOn} from "react-icons/fa"

const DaoVoting: NextPage = () => {
  return (
    <div>
        <div>
           <DaoTab active="voting" />
        </div>

        <div className="md:gradientBackgroundlx  my-5  px-5 " >
            <div className="container mx-auto uppercase mb-10 py-8 gap-x-10">
                <div className="flex flex-row justify-between md:flex-col">
                    <div className="pt-1" >
                        <Image src={totalIcon} width="20" height="20"  className="align-middle" alt="Align Middle" />
                        <span className="align-top ml-3">Total Voting Power
                        </span>
                    </div>
                    <div className="mt-2 ml-4">
                        <span className="text-xl">0 
                           <span className="bg-spacey-vote-button px-2 rounded font-semibold text-spacey-white ml-4">VP</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-5">
        <div className="md:container md:mx-auto grid grild-cols-1 md:grid-cols-3 uppercase gap-y-10 md:gap-x-10">
            {/*!-- Section 1 */}
            <div className="">
                 <div className="flex flex-col">
                     <div className="flex flex-row justify-between mb-5">
                        <div className="ml-4">
                            MANA
                        </div>
                        <div >
                            <span className="text-spacey-vote-button">GET MANA ...</span>
                        </div>
                     </div>
                 
                    <div className="flex flex-col bg-spacey-dao-content-bg rounded pt-6">
                         <div className="flex flex-row md:flex-col justify-between">
                            <div className="text-lg mb-5 px-4 md:px-8">
                                MANA
                                <hr className="w-10 bg-spacey-vote-button h-0.5 text-spacey-vote-button" />
                            </div>
                            <div className="flex flex-row justify-between pb-5 pr-2 md:px-8 flex-1 items-center">
                                <div className="text-spacey-dao-content-text ">WRAPPED MANA</div>
                                <div>0 <span className="ml-2 border px-2 border-spacey-dao-grey text-spacey-dao-grey">VP</span></div> 
                            </div>
                         </div>
                         <div className="bg-dot-image h-0.5">
                           
                         </div>
                         <div className="mt-8 px-4 md:px-8 h-32 flex flex-row md:flex-col justify-between md:justify-start">
                             <div className="text-spacey-dao-content-text ">
                                 AVAILABLE TO WRAP
                                
                             </div>
                             <div className="md:mt-5">
                               <Image src={landIcon} width="25" height="25" alt="land icon" />
                                <span className="align-top ml-2">0 </span> 
                             </div>
                         </div>
                         <div>
                             <div>

                             </div>
                             <div className="bg-spacey-dao-content-bottom mt-10 rounded-b px-3 py-3">
                                 <div className="flex flex-row justify-between container mx-auto">
                                    <div>
                                      <FaToggleOn size={30} className="text-spacey-vote-button"></FaToggleOn>
                                    </div>
                                    <div className="text-spacey-dao-content-text ">
                                        AUTHORIZE MANA
                                    </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                 </div>
            </div>

              {/*!-- Section 2 */}
            <div className="">
            <div className="flex flex-col">
                     <div className="flex flex-row justify-between mb-5">
                     <div className="ml-4">
                            MANA
                        </div>
                        <div className="mb-5">
                        
                        </div>
                     </div>
                 
                    <div className="flex flex-col bg-spacey-dao-content-bg rounded pt-6">
                        <div className="flex flex-row md:flex-col justify-between">
                            <div className="text-lg mb-5 px-4 md:px-8">
                                LAND
                                <hr className="w-10 bg-spacey-vote-button h-0.5 text-spacey-vote-button" />
                            </div>
                            <div className="flex flex-row justify-between pb-5 pr-2  md:px-8 flex-1  flex-1 items-center">
                                <div className="text-spacey-dao-content-text ">BALANCE</div>
                                <div>0 Lands</div> 
                            </div>
                         </div>
                         <div className="bg-dot-image h-0.5">
                           
                           </div>
                         <div className="mt-8 px-4 md:px-8 h-32 flex flex-row md:flex-col justify-between md:justify-start">
                             <div className="text-spacey-dao-content-text ">
                                 Total Voting Power
                                
                             </div>
                             <div className="md:mt-5">
                             0 <span className="ml-2 border px-2 border-spacey-dao-grey text-spacey-dao-grey">VP</span>
                             </div>
                         </div>
                         <div>
                         <div>
                           
                           </div>
                             <div className="bg-spacey-dao-content-bottom mt-10 rounded-b px-3 py-3">
                                 <div className="flex flex-row justify-between container mx-auto">
                                    <div>
                                      <FaToggleOn size={30} className="text-spacey-vote-button"></FaToggleOn>
                                    </div>
                                    <div className="text-spacey-dao-content-text ">
                                        COMMIT LANDS
                                    </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                 </div>
            </div>
            
              {/*!-- Section 3 */}
            <div className="">
            <div className="flex flex-col">
                     <div className="flex flex-row justify-between">
                    <div>

                    </div>
                        <div className="mb-5">
                            <span className="text-spacey-vote-button">GET MANA ...</span>
                        </div>
                     </div>
                 
                    <div className="flex flex-col bg-spacey-dao-content-bg rounded pt-6">
                       <div className="flex flex-row md:flex-col justify-between">
                            <div className="text-lg mb-5 px-4  md:px-8">
                                ESTATE
                                <hr className="w-10 bg-spacey-vote-button h-0.5 text-spacey-vote-button" />
                            </div>
                            <div className="flex flex-row justify-between pb-5 pr-2 md:px-8 flex-1 items-center">
                                <div className="text-spacey-dao-content-text ">BALANCE</div>
                                <div>0 <span className="ml-2 border px-2 border-spacey-dao-grey text-spacey-dao-grey">ESTATES</span></div> 
                            </div>
                        </div>
                        <div className="bg-dot-image h-0.5">
                           
                           </div>
                         <div className="mt-8 px-4 md:px-8 h-32">
                             <div className="text-spacey-dao-content-text flex flex-row justify-between ">
                                <div>TOTAL LANDS</div> 
                                <div className="text-spacey-white">LANDS</div>
                             </div>
                             <div className="mt-5 flex flex-row md:flex-col justify-between">
                                 <div className="text-spacey-dao-content-text mb-5">TOTAL VOTING POWER</div>
                                 <div>
                                   0 <span className="ml-2 border px-2 border-spacey-dao-grey text-spacey-dao-grey">VP</span>
                                </div>
                             </div>
                         </div>
                         <div>
                             <div>

                             </div>
                             <div className="bg-spacey-dao-content-bottom mt-10 rounded-b px-3 py-3">
                                 <div className="flex flex-row justify-between container mx-auto">
                                    <div>
                                      <FaToggleOn size={30} className="text-spacey-vote-button"></FaToggleOn>
                                    </div>
                                    <div className="text-spacey-dao-content-text ">
                                        COMMIT ESTATES
                                    </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                 </div>
            </div>
        </div>
       </div>
    
    </div>
  )
}

export default withLayout(DaoVoting)
