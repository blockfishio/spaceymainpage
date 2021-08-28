import React, { useState, useRef } from 'react';
import Link from 'next/link'

interface Props {
    active: string
  
}

const DaoTab = ({active}:Props) => {
  
    const activeTab = active
    const activeClass = ""

    return (
      <div className="mt-32 md:border-b-2 border-spacey-dao-tab-seperator">
         <div className="container mx-auto hidden md:block">
            <ul className="flex flex-row text-lg space-x-6">
                <li  className="flex flex-col align-center justify-between">
                    <Link href="/dao/proposal">
                      <a>
                       Proposals
                      </a>
                    </Link>
                    {active === 'proposal' &&
                     (
                    <div className="mt-3 border-spacey-dao-tab-active border-2 rounded">
                    </div>
                     )
                    }
                </li>
                <li  className="flex flex-col align-center justify-between">
                   <Link href="/dao/voting">
                      <a>
                       Voting Power
                      </a>
                    </Link>
                    {active === 'voting' &&
                     (
                    <div className="mt-3 border-spacey-dao-tab-active border-2 rounded">
                    </div>
                     )
                    }
                    </li>
            </ul>
         </div>    
         <div className="md:hidden mt-20 mx-auto container px-5">
            <div className="flex flex-row">
                <div className={"w-1 rounded mr-3 " + (active === 'proposal' ? "bg-spacey-dao-blue-bar" : "")}>

                </div>
                <div>
                <Link href="/dao/proposal">
                      <a>
                       Proposals
                      </a>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row mt-3">
                <div className={"w-1 rounded mr-3 " + (active === 'voting' ? "bg-spacey-dao-blue-bar" : "")}>
                </div>
                <div>
                <Link href="/dao/voting">
                      <a>
                       Community Market
                      </a>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    )
}

export default DaoTab