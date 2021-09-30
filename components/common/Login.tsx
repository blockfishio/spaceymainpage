import React from "react";
import {MdClose} from "react-icons/md"
import Image from "next/image"
import metaMask from "../../public/images/ic_metamask@2x.png"
import waxIcon from "../../public/images/ic_wax@2x.png"

interface Props {
  open:Boolean,
  handleOpen:Function
}

export default function Login( {open, handleOpen} : Props) {

  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center w-12/12 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-11/12 md:w-auto  my-6 mx-auto max-w-3xl bg-login-background bg-cover rounded-xl">
              {/*content*/}
              <div className="border-0  relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 relative">
                  <h3 className="text-3xl font-semibold mx-auto text-center md:text-left">
                    Sign in or Create Account
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0"
                    onClick={() => handleOpen(false)}
                  >
                    <span className="text-4xl absolute" style={{top: '-16px', right: '-16px'}}>
                      <MdClose className="bg-spacey-login-close rounded-full" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-lg leading-relaxed flex flex-row justify-between gap-x-10">
                      <div className="flex flex-col justify-center">
                        <div className="mx-auto">
                          <Image src={metaMask} width={50} height={50} alt="MetaMask"/>
                        </div>
                        <div className="mx-auto text-spacey-login-text-heavy">
                          MetaMask
                        </div>
                        <div className="mx-auto text-spacey-login-text-light mt-5 text-center">
                          Using your browser account
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                          <div className="mx-auto">
                            <Image src={waxIcon} width={50} height={50} alt="wax icon" />
                          </div>
                          <div className="mx-auto  text-spacey-login-text-heavy">
                            Wax
                          </div>
                          <div className="mx-auto text-spacey-login-text-light mt-5 text-center">
                            Using your email account
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