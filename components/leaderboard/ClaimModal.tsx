import React from "react";
import {MdClose} from "react-icons/md"

export interface MetaData {
    type: String, 
    claimable: number, 
    remaining: number
  }

interface Props {
  open:Boolean,
  handleOpen:Function, 
  claim: MetaData
}


export function ClaimModal( {open, handleOpen, claim} : Props) {
  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center w-12/12 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-11/12 md:w-auto  my-6 mx-auto max-w-4xl  bg-cover bg-spacey-leaderboard-grey border-spacey-leaderboard-yellow border-4">
              {/*content*/}
              <div className="border-0  relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 relative">
                 
                </div>
                {/*body*/}
                <div className="relative px-24 py-6 flex-auto">
                  <div>
                  <h3 className="text-4xl mx-auto text-center font-bankgothic">
                     Your Claimable 
                     { 
                        claim.type == "mars" && " MetaMars: " +  claim.claimable
                     }

                     { 
                        claim.type == "spray" && " MetaSpray: " +  claim.claimable
                     }
                  </h3>
                   <h3 className="text-3xl mx-auto text-center  font-bankgothic mt-2">
                     Remaining 
                     { 
                        claim.type == "mars" && " MetaMars "
                     }

                     { 
                        claim.type == "spray" && " MetaSpray "
                     }
                      amount: {claim.claimable}
                   </h3>
                  </div>
                  <div className="my-4 text-lg leading-relaxed flex flex-row justify-center	 gap-x-10 font-bankgothic mt-20">
                      <div className="flex flex-col justify-center" >
                        
                        <div className="mx-auto  bg-spacey-leaderboard-button px-8 py-2  rounded-xl  hover:bg-spacey-leaderboard-button-highlight cursor-pointer" onClick={() => alert('Confirmed')}>
                          Confirm
                        </div>
                        
                      </div>
                      <div className="flex flex-col justify-center">
                         
                          <div className="mx-auto  bg-spacey-leaderboard-button px-8 py-2  rounded-xl  hover:bg-spacey-leaderboard-button-highlight cursor-pointer"  onClick={() => handleOpen(false)}>
                            Cancel
                          </div>
                      
                      </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}