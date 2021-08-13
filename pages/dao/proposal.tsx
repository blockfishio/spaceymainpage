import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'

const DaoProposal: NextPage = () => {
  return (
    <div>
     <div>This is Propsal Page </div>
     <div className="box-border h-32 w-32 p-4 border-4"></div>
    </div>
  )
}

export default withLayout(DaoProposal)
