import type { NextPage } from 'next'
import withLayout from '../../hocs/withLayout'

const Dao: NextPage = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col items-center">
            <h1>SpACE Y 2025 DAO</h1>
            <h3>Dovern the Mars by yourselfs</h3>
            <div className="flex flex-row items-center">
                <a href="">
                    START VOTING
                </a>
                <a href="">
                    LEARN MORE
                </a>
            </div>

         <div className="flex flex-col items-center">
             <div>
                 <div>
                    <h2>WHAT IS SPACE Y 2025 DAO</h2>    
                    <div>
                        protect the Mars base from being invaded by aliens
                        Use your strategies to build a Martian defense system to effectively defned against enemy.
                    </div>
                 </div>
             </div>
         </div>
      </div>
    
    </div>
  )
}

export default withLayout(Dao)
