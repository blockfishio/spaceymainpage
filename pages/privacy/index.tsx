import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'

const Privacy: NextPage = () => {
  return (
    <div className="container mt-20 mx-auto">
     <h1>PRIVACY POLICY</h1>
     <div>
         <h3>1. Introduction</h3>
     </div>
     <div>
         <h3>2. Information Collected in the Site and Tools </h3>
     </div>
    </div>
  )
}

export default withLayout(Privacy)
