import type { NextPage } from 'next'
import Image from 'next/image'
import withLayout from '../../hocs/withLayout'
import DaoTab from '../../components/dao/tab'
import Link from 'next/link'
import votingPowerIcon from "../../public/images/ic_votingpower@2x.png"
import arrowDownIcon from "../../public/images/ic_drop_down@2x.png"
import totalIcon from "../../public/images/ic_total@2x.png"
import estatesIcon from "../../public/images/ic_estates@2x.png"
import landIcon from "../../public/images/ic_lands@2x.png"
import manaIcon from "../../public/images/ic_mana@2x.png"

const DaoProposal: NextPage = () => {
  return (
    <div>
        <div className="">
           <DaoTab active="proposal" />
        </div>

        <div className="gradientBackgroundFull my-5  px-5" >
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 uppercase mb-10 py-8 gap-x-10">
                <div className="flex flex-row gap-x-3 items-center">
                    <div className="pt-1" >
                        <Image src={votingPowerIcon} width="20" height="20"  className="align-middle"  alt="Voting Power Icon"/>
                    </div>
                    <div className="align-top">
                           Voting Power
                    </div>
                </div>
                <div className="col-span-2 hidden md:block">
                    <div className="flex flex-row justify-between">
                        <div>0 Proposals</div>
                        <div className="flex flex-row text-spacey-vote-button">
                            <div className="mr-5">
                                <span className="align-text-bottom mr-2">Relewant Outcoms
                                </span>
                                <Image src={arrowDownIcon} width="15" height="15" alt="Arrow Down Icon" />
                                </div>
                            <div>
                            <div className="mr-5">
                                <span className="align-text-bottom mr-2"> Categories
                                </span>
                                <Image src={arrowDownIcon} width="15" height="15" alt="Arrow Down Icon" />
                                </div>
                             </div> 
                            <div>
                                <Link href="#">
                                   <a>
                                    <span className="bg-spacey-vote-button px-4 py-1 rounded font-semibold text-spacey-white text-sm">New Proposal</span>
                                    </a>
                                </Link>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  uppercase gap-x-10">
            <div>
                <div className="ml-5 md:ml-0">
                   <Image src={totalIcon} width="15" height="15" alt="Total Count Icon"  />
                   <span  className="ml-2 align-text-bottom mr-2">TOTAL</span>
                </div>

                <div className="px-5">
                    <div className="py-3 my-2">
                        <span className="text-xl">0 
                           <span className="bg-spacey-vote-button px-2 rounded font-semibold text-spacey-white ml-4 float-right ">VP</span>
                        </span>
                    </div>
                    <div className="rounded border-2 w-full border-spacey-dao-line-breaker mb-2">

                    </div>
                    <div className="flex flex-row justify-between my-5">
                            <div>
                            Wrapped Tokens
                            </div>
                            <div className="text-spacey-vote-button">
                                Manage
                            </div>
                        </div>
                        
                        <div className="flex flex-row justify-between my-5">
                            <div>
                               <Image src={landIcon} width="25" height="25" alt="Land Icon" />
                                <span className="align-top ml-2">0 LANDS</span> 

                            </div>
                            <div>
                            0  <span className="ml-2 border px-2 border-spacey-dao-grey text-spacey-dao-grey">VP
                                </span>
                            </div>
                       </div>
                      
                       <div className="flex flex-row justify-between my-4">
                         <div>
                         <Image src={estatesIcon} width="25" height="25" alt="estate icons" />
                         <span className="align-top ml-2">0 ESTATEs</span>
                          </div>
                          <div>
                          0 <span className="ml-2 border px-2 border-spacey-dao-grey text-spacey-dao-grey">VP
                             </span>
                        </div>
                     </div>
                
                     <div className="flex flex-row justify-between  my-2">
                        <div>
                        <Image src={manaIcon} width="25" height="25"  alt="mana icon" />
                           <span className="align-top ml-2"> 0 MANA</span> 
                        </div>
                        <div>
                           0 <span className="ml-2 border px-2 border-spacey-dao-grey text-spacey-dao-grey">VP
                             </span>
                        </div>
                     </div>
                  </div>
            </div>
            <div className="md:col-span-2">
                <div className="md:hidden flex flex-col justify-between mx-5 mt-5">
                        <div className="flex flex-row justify-between w-full">
                            <div>
                                0 Proposals
                            </div>
                            <div>
                                <Link href="#">
                                   <a>
                                    <span className="bg-spacey-vote-button px-4 py-2 rounded font-semibold text-spacey-white text-sm">New Proposal</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between text-spacey-vote-button mt-5 mb-10">
                            <div className="mr-5">
                                <span className="align-text-bottom mr-2">Relewant Outcoms
                                </span>
                                <Image src={arrowDownIcon} width="15" height="15" alt="arrow down icon" />
                                </div>
                            <div>
                            <div className="mr-5">
                                <span className="align-text-bottom mr-2"> Categories
                                </span>
                                <Image src={arrowDownIcon} width="15" height="15" alt="arrow down icon" />
                                </div>
                             </div> 
                       
                       </div>
                    </div>

                <div className="px-10 py-20 bg-spacey-dao-content md:w-full m-5 md:m-0">
                    Wrapped Tokens
                </div>
                
            </div>
        </div>
       </div>
    </div>
  )
}

export default withLayout(DaoProposal)
