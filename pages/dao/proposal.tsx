import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'

const DaoProposal: NextPage = () => {
  return (
    <div className="container mx-auto mt-20">
     <div className="flex flex-row">
        <div>
            Proposals
        </div>
        <div>
            Voting Power
        </div>
     </div>
     
     <div className="grid grid-cols-2 uppercase mb-20">
         <div>
            <a href="">Voting Power</a>
         </div>
         <div>
             <ul className="flex flex-rows">
                 <li>0 Proposals</li>
                 <li>Relewant Outcoms</li>
                 <li>All Categories</li>
                 <li>New Proposal</li>
             </ul>
         </div>
     </div>

     <div className="grid grid-cols-2 uppercase">
         <div>
            <div>TOTAL</div>
            <div>0 VP</div>
            <div className="flex flex-row">
                <div>
                   Wrapped Tokens
                </div>
                <div>
                    Manage
                </div>
            </div>
            <div className="flex flex-row">

                <div>
                   0 LANDS 
                </div>
                <div>
                    0 VP
                </div>
            </div>
            <div className="flex flex-row">

                <div>
                   0 ESTATEs
                </div>
                <div>
                    0 VP
                </div>
            </div>
            <div className="flex flex-row">

                <div>
                   0 MANA
                </div>
                <div>
                   0 VP
                </div>
            </div>
         </div>
         <div>
             <div>
                 Wrapped Tokens
             </div>
         </div>
     </div>
    </div>
  )
}

export default withLayout(DaoProposal)
