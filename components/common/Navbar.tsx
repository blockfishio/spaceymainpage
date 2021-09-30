import React, { useState, useRef } from 'react';
import logo from '../../public/images/logo.png'
import mobileLogo from '../../public/images/spaceY_2_bright.png'
import Image from 'next/image'
import Link from 'next/link'
import {FaCaretDown, FaCaretUp} from "react-icons/fa"
import { useOnClickOutSide } from '../../hooks/useOnClickOutside';
import LoginModal from '../../components/common/Login';
import { Transition } from '@headlessui/react'

interface Props {
    mode: string
}

const NavBar = ({mode}:Props) => {
    
    const navLinks = [
        {
            title: 'Market', 
            link: 'https://market.spacey2025.com', 
            link_type: 'external'
        },
        {
            title: 'Info', 
            link: '/info',
            link_type: ''
        },
        {   
            title: 'Dao', 
            link: '/dao',
            link_type: ''
        },
        {
            title: 'Get Spay', 
            link: '/getspay',
            link_type: ''
        },
        {
            title: 'Community',
            link: '/community',
            link_type: ''
        },
        {
            title: 'Free Ticket',
            link: '/freeticket',
            link_type: ''
        }
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [isLoginOpen, setLoginOpen] = useState(false)
    const backgroundMode = mode === 'dark' ? "bg-spacey-heavy" : ""
    const menuNode = useRef<HTMLDivElement>(null);
    useOnClickOutSide(menuNode, () => setIsOpen(false));

    return (
        <section>
            <div ref={menuNode}>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
             >
               <div className="flex  bg-spacey-navbar  flex-col  justify-center md:hidden fixed  top-0 left-0 w-full z-50 ">
                         <div>
                            <div className="flex flex-row items-center">
                                <div className="">
                                <Link  href="/">
                                 <a className="ml-1"><Image priority={true} src={mobileLogo} width="200" height="50"   quality="100" alt="Mobile Logo"/></a>
                                </Link>
                                </div>
                                <div className="text-spacey-mobile-grey flex items-center">
                                <FaCaretUp className="cursor-pointer text-2xl" onClick={() => setIsOpen(false) } > open</FaCaretUp>
                                </div>
                            </div>
                          <ul className="flex flex-col  font-segoe text-nav uppercase text-base font-semibold text-nav">
                          {navLinks.map(({ title, link, link_type }, id) => (
                            <li key={id} className="p-3 hover:bg-spacey-mobile-background active:bg-spacey-mobile-background">
                                
                                <Link href={link} >
                                <a className="" target={link_type}>
                                 <span>{title}</span>
                                 </a>
                                </Link>
                            </li>
                          ))}
                       </ul>
                       </div>
              </div>
              </Transition>
        </div>
            <nav className={"flex items-center justify-between px-5 fixed top-0 left-0  w-full  z-40 text-spacey-white " + backgroundMode}>
               <div className="container mx-auto">
               <div className="flex-1 flex items-center font-robo uppercase md:text-sm lg:text-base font-semibold ">
                   <div className="flex-initial lg:mr-4 -ml-5">
                    <Link href="/">
                      <a>
                        <Image src={logo} quality="100" width="200" height="50" alt="Logo" />
                      </a>
                    </Link>
                   </div>
                   <div className="md:hidden">
                       {!isOpen ? (
                        <div onClick={() => setIsOpen(true) }>
                            <FaCaretDown className="cursor-pointer text-2xl"
                        />
                        </div>
                       ) : (
                        <div  onClick={() => setIsOpen(false) }>
                        <FaCaretUp className="cursor-pointer text-2xl" />
                        </div>
                      
                       )}
                     </div>
            
                    <div className="hidden md:flex flex-1 flex-grow">
                        <ul className="flex flex-row space-x-4 font-segoe text-nav">
                        {navLinks.map(({ title, link, link_type }, id) => (
                            <li key={id} >
                                <Link href={link}>
                                <a className="hover:text-spacey-mobile-background-hover" target={link_type}>
                                 <span>{title}</span>
                                 </a>
                                </Link>
                           
                            </li>
                        ))}
                        </ul>
                    </div>
                    {/* <div className="space-x-4 flex-1 md:flex-none">
                       <ul className="flex flex-row float-right space-x-4  font-segoe text-nav " >
                           <li className="hidden lg:block">
                           <Link href="https://discord.com/invite/cUeNS8UzGW" >
                             <a target="_blank">Join Our Discord</a>
                             </Link>
                           </li>
                           <li>
                              <a className="border-b-2 border-spacey-orange-border pb-1 cursor-pointer font-segoe text-nav "  onClick={(event) => {setLoginOpen(true); console.log(isLoginOpen)}}>
                                Login
                                </a>
                        
                           </li>
                       </ul>
                     
                       
                    </div> */}
                </div>
              </div>
            </nav>
            <LoginModal open={isLoginOpen} handleOpen={setLoginOpen} />
        </section>
    );
};

export default NavBar;
