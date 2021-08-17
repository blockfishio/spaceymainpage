import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'

const FreeTicket: NextPage = () => {
  return (
    <div className="flex-row flex">
       <div className="mt-20 container mx-auto">
             <div>
                <h1>
                    SPREAD THE WORD & CLAIM TOUR FREETIVKET
                </h1>
                <div>This is just a preview of the NFT Tickets that can be purchased</div>

                <div>
                    <form>
                       <div> <input placeholder="NAME" /></div>
                       <div>  <input placeholder="EMAIL" /></div>
                       <div>  <button>Claim your free ticket</button></div>
                    </form>
                </div>
             </div>

        </div>
   
    </div>
  )
}

export default withLayout(FreeTicket)
