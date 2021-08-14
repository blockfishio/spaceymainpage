import React from 'react';
import startDefense from '../../public/images/ic_defend@2x.png'
import Image from 'next/image'

const ContactSection =  () => {
  return (
    <section>
        <div className="container mx-auto">
           <div className="grid grid-cols-2">
               <div>
                  <h2> Contact us</h2>
                  <div>
                      Have question about this Mars mission? Reach us on Discord at any time
                  </div>
                  <div>
                      <a href="">
                          GET IN TOUCH
                      </a>
                  </div>
               </div>
               <div>
                  <h2> Sign up</h2>
                  <div>
                      You'll find us on Discord. You can also sign up to get the latest updates
                  </div>
                  <div>
                      <input placeholder="email@domain.com" />
                      <a href="">
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
