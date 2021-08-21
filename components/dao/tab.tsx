import React, { useState, useRef } from 'react';
import Link from 'next/link'

interface Props {
    active: string
  
}

const DaoTab = ({active}:Props) => {
  
    const activeTab = active
    const activeClass = ""

    return (
      <div className="mt-32 border-b-2 border-spacey-dao-tab-seperator">
         <div className="container mx-auto ">
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
      </div>
    )
}

export default DaoTab