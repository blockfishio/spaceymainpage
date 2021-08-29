import React, { useState, useRef } from 'react';
import logo from '../../public/images/logo.png'
import mobileLogo from '../../public/images/spaceY_2_bright.png'
import Image from 'next/image'
import Link from 'next/link'
import {FaCaretDown, FaCaretUp} from "react-icons/fa"
import { useOnClickOutSide } from '../../hooks/useOnClickOutside';
import LoginModal from '../../components/common/Login';

interface Props {
    mode: string
}

const NavBar = ({mode}:Props) => {
    
    const navLinks = [
        {
            title: 'Market', 
            link: '/market'
        },
        {
            title: 'Info', 
            link: '/info'
        },
        {   
            title: 'Dao', 
            link: '/dao'
        },
        {
            title: 'Get Spay', 
            link: '/getspay'
        },
        {
            title: 'Community',
            link: '/community'
        },
        {
            title: 'Free Ticket',
            link: '/freeticket'
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
              {isOpen && (
               <div className="flex bg-spacey-white  py-2 flex-col  justify-center md:hidden  fixed  top-0 left-0 w-full z-50">
                         <div>
                            <div className="flex flex-row items-center">
                                <div className="">
                                <Link href="/">
                                <Image src={mobileLogo}  width="200" height="45" />
                                </Link>
                                </div>
                                <div className="text-spacey-mobile-grey flex items-center">
                                <FaCaretUp className="cursor-pointer text-2xl" onClick={() => setIsOpen(false) } > open</FaCaretUp>
                                </div>
                            </div>
                          <ul className="flex flex-col text-spacey-mobile-grey-heavy font-robo uppercase text-base font-semibold ">
                          {navLinks.map(({ title, link }, id) => (
                            <li key={id} className="p-3 hover:bg-spacey-mobile-background active:bg-spacey-mobile-background">
                                <Link href={link}>
                                <a className="">
                                 <span>{title}</span>
                                 </a>
                                </Link>
                            </li>
                          ))}
                       </ul>
                       </div>
              </div>
                    
             )}
        </div>
            <nav className={"flex items-center justify-between px-5 fixed top-0 left-0  w-full  z-40 text-spacey-white " + backgroundMode}>
               <div className="container mx-auto">
               <div className="flex-1 flex items-center font-robo uppercase md:text-sm lg:text-base font-semibold ">
                   <div className="flex-initial lg:mr-4 -ml-5">
                    <Link href="/">
                      <a>
                        <Image src={logo} quality="100" width="200" height="50"/>
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
                        <ul className="flex flex-row space-x-4">
                        {navLinks.map(({ title, link }, id) => (
                            <li key={id} >
                                <Link href={link}>
                                <a className="">
                                 <span>{title}</span>
                                 </a>
                                </Link>
                           
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="space-x-4 flex-1 md:flex-none">
                       <ul className="flex flex-row float-right space-x-4">
                           <li className="hidden lg:block">
                           <Link href="#" >
                             <a>Join Our Discord</a>
                             </Link>
                           </li>
                           <li>
                              <a className="border-b-2 border-spacey-orange-border pb-1 cursor-pointer text-sm md:text-base"  onClick={(event) => {setLoginOpen(true); console.log(isLoginOpen)}}>
                                Login
                                </a>
                        
                           </li>
                       </ul>
                     
                       
                    </div>
                </div>
              </div>
            </nav>
            <LoginModal open={isLoginOpen} handleOpen={setLoginOpen} />
        </section>
    );
};

export default NavBar;
