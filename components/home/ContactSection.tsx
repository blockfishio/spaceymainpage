import React, {useState} from 'react';
import Link from 'next/link'
import axios from "axios"

const ContactSection =  () => {

  const [emailSubscriptionStatus, setEmailSubscriptionStatus] =useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [message, setMessage] = useState("")

   const validateEmail = (email:string) =>  {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const subscribeEmail : React.MouseEventHandler<HTMLAnchorElement> = async (e) => {
    e.preventDefault()

    if (emailAddress.length > 0 && validateEmail(emailAddress)){
        try {
            const result = await axios.post("https://play.spacey2025.com/api/email/" + emailAddress)
            setEmailSubscriptionStatus("success")
            setMessage("The email has been successfully subscribed")
            console.log('are you ther 1')
          } catch (err) {
            setEmailSubscriptionStatus("fail")
            setMessage("Email can't be subscribed")
          }
    } else {
        setEmailSubscriptionStatus("fail")
        setMessage("Please input the correct email")
       
    }




    return false
  }

    return (
    <section>
        <div className="container mx-auto text-spacey-black my-10 md:my-32 ">
           <div className="grid grid-cols-1 md:grid-cols-2   md:gap-4 p-5 md:p-0">
               <div className="flex flex-col justify-between">
                  <h2 className="text-2xl font-medium mb-3 "> Contact us</h2>
                  <div>
                      Have question about this Mars mission? Reach us on Discord at any time
                  </div>
                  <div className="mt-5">
                      <Link href="https://discord.com/invite/cUeNS8UzGW" passHref>
                      <a  target="_blank"  className="bg-spacey-yellow px-6 py-2 inline-block text-spacey-white rounded  transform transition duration-200 hover:-translate-y-1 hover:bg-spacey-yellow-hover ">

                          GET IN TOUCH
                      </a>
                      </Link>
                  </div>
               </div>
               <div className="flex flex-col justify-between">
                  <h2 className="text-2xl font-medium mt-10 md:mt-0  mb-3 "> Sign up</h2>
                    <div>
                        You&lsquo;ll find us on Discord. You can also sign up to get the latest updates
                    </div>
                  <div className="flex flex-col md:flex-row mt-5  md:gap-y-0">
                      <div className="flex-grow md:flex-grow-0 md:mr-5">
                      <input placeholder="email@domain.com" className="mr-2 pl-2 py-2 rounded bg-spacey-input-background w-full" value={emailAddress || ''} onChange={e => setEmailAddress(e.target.value)} />
                      </div>
                      <Link href="/">
                      <a onClick={subscribeEmail} className="bg-spacey-yellow px-6 py-2 transform transition duration-200 hover:-translate-y-1 text-spacey-white rounded text-center hover:bg-spacey-yellow-hover ">
                          SIGN UP
                      </a>
                      </Link>
                  </div>
                  <div>
                      <div className={emailSubscriptionStatus === "success" ? "text-green-700": "text-red-700"}> 
                        {message}
                      </div>
                  </div>
               </div>
           </div>
        </div>
    </section>

  )
}

export default ContactSection

