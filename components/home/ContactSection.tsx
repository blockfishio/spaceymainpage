import React from 'react';
import startDefense from '../../public/images/ic_defend@2x.png'
import Image from 'next/image'

const ContactSection =  () => {
  return (
    <section>
        <div className="container mx-auto text-spacey-black mb-20">
           <div className="grid grid-cols-2 mt-20 gap-4">
               <div>
                  <h2 className="text-2xl font-medium mb-10 "> Contact us</h2>
                  <div>
                      Have question about this Mars mission? Reach us on Discord at any time
                  </div>
                  <div className="mt-20">
                      <a href="/" className="bg-spacey-pink px-6 py-2 text-spacey-white rounded">
                          GET IN TOUCH
                      </a>
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl font-medium mb-10"> Sign up</h2>
                  <div>
                      You'll find us on Discord. You can also sign up to get the latest updates
                  </div>
                  <div className="mt-20">
                      <input placeholder="email@domain.com" className="mr-2 pl-2 py-2 rounded bg-spacey-input-background" />
                      <a href="/" className="bg-spacey-pink px-6 py-2 text-spacey-white rounded">
                          SIGN UP
                      </a>
                  </div>
               </div>
           </div>
        </div>
    </section>

  )
}

export default ContactSection
