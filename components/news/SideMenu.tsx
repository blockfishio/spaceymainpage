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
            <li className={"pl-2 py-1 " + (activeTab === 'news' ? activeClass : "")}>
               <Link href="/news">
               News
               </Link>
            </li>
           
            
        </ul>
     </div>
    )
}

export default SideMenu