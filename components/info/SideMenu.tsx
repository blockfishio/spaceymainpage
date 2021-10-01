import React, { useState, useRef } from 'react';
import Link from 'next/link'

interface Props {
    active: string,
    toggle: boolean
}

const SideMenu = ({active, toggle = false}:Props) => {
  
    const activeTab = active
    const activeClass = "bg-spacey-sidemenu-background rounded text-spacey-white"
    const [playToggle, setPlayToggle] = useState(toggle)


    return (
      <div className="hidden md:block">
        <ul className="flex flex-col gap-2 text-xl mr-20">
            <li className={"pl-2 py-1 " + (activeTab === 'home' ? activeClass : "")}>
               <Link href="/info">
               Home
               </Link>
            </li>
            <li className={"pl-2 py-1 "  + (activeTab === 'background' ? activeClass : "")}>
                <Link href="/info/background">
                Background Story
                </Link>
                </li>
            <li className="pl-2 py-1 cursor-pointer" onClick={
                (e) => {
                    setPlayToggle(!playToggle)
                    console.log(playToggle)
                    return false
                }
            }><Link href="#">
                GamePlay
                </Link></li>
                <ul className={"flex flex-col text-spacey-light-grey  text-base font-medium " + (playToggle ? "block" : "hidden") }>
                    <li className={"pl-6 py-1 " + (activeTab === 'build' ? activeClass : "")}>
                        <Link href="/info/build">
                            Build
                        </Link>
                    </li>
                    <li className={"pl-6 py-1 " + (activeTab === 'fight' ? activeClass : "")}>
                        <Link href="/info/fight">
                            Fight
                        </Link>
                    </li>
                    <li className={"pl-6 py-1 " + (activeTab === 'upgrade' ? activeClass : "")}>
                        <Link href="/info/upgrade">
                            Upgrade
                        </Link>
                    </li>
                </ul>
            <li className={"pl-2 py-1 " + (activeTab === 'market' ? activeClass : "")}>
                <Link href="/info/market">
                Market
                </Link>
                
                </li>
        </ul>
     </div>
    )
}

export default SideMenu