import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'

const Market: NextPage = () => {
  return (
    <div>
     <div>This is Market Page </div>
     <div className="box-border h-32 w-32 p-4 border-4"></div>
    </div>
  )
}

export default withLayout(Market)
