import React, { useState, useRef } from 'react';
import Link from 'next/link'

interface Props {
    active: string
  
}

const SideMenu = ({active}:Props) => {
  
    const activeTab = active
    const activeClass = "bg-spacey-sidemenu-background rounded text-spacey-white"
    return (
      <div className="hidden md:block">
        <ul className="flex flex-col gap-2 text-xl mr-20">
            <li className={"pl-2 py-1 " + (activeTab === 'home' ? activeClass : "")}>
               <Link href="/info">
               Home
               </Link>
            </li>
            <li className="pl-2 py-1 ">Background History</li>
            <li className="pl-2 py-1">GamePlay</li>
                <ul className="flex flex-col text-spacey-light-grey  text-base font-medium">
                    <li className={"pl-6 py-1 " + (activeTab === 'build' ? activeClass : "")}>
                        <Link href="/info/build">
                            Build
                        </Link>
                    </li>
                    <li className="pl-6 py-1 ">
                        <Link href="#">
                            Flight
                        </Link>
                    </li>
                    <li className="pl-6 py-1 ">
                        <Link href="#">
                            Upgrade
                        </Link>
                    </li>
                </ul>
            <li className="pl-2 py-1">Market</li>
        </ul>
     </div>
    )
}

export default SideMenu