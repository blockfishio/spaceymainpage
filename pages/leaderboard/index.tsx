import type { NextPage} from 'next'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutSide } from '../../hooks/useOnClickOutside';
import withLayout from '../../hocs/withLayout'
import arrowIcon from '../../public/images/ic_icon@2x.png'
import infoIcon from '../../public/images/info@3x.png'
import token from '../../public/images/token_rounded.png'
import {MetaData, ClaimModal} from '../../components/leaderboard/ClaimModal'
import InfoModal from '../../components/leaderboard/InfoModal'

const LeaderBoard: NextPage = () => {

  const [isClaimOpen, setClaimOpen] = useState(false)
  const [isInfoOpen, setInfoOpen] = useState(false)
  const [claim, setClaim] = useState<MetaData>({type: "", claimable: 0, remaining: 0})

  const getLeadBoradData = () => {
    let totalRecords = 300
    let records = []
    for (let i = 1; i <= totalRecords; i++) {
      records.push({
        "rank": i, 
        "name": "ASDF dadsd", 
        "wallet": "******2345",
        "score": 1000000 - i, 
        "wave": Math.floor(100 - i / 10), 
        "token_rewards": 1000 -i,
        "difficulty_level": i % 8
      })
    }
    return records
  }

  let records=null;
  records = getLeadBoradData()

  let claims = {
    "spray": {
      type:"spray", 
      claimable: 9999, 
      remaining: 9999
    }
  }

  const leaderBoardStyle = {
    "rank1": "bg-spacey-leaderboard-orange", 
    "rank2": "bg-spacey-leaderboard-orange-light", 
    "rank3": "bg-spacey-leaderboard-orange-lighter", 
    "rank_grey": "bg-spacey-leaderboard-grey",
    "rank_me": "bg-spacey-leaderboard-blue", 
    "rank_origin": "bg-spacey-leader-grey-heavy"
  }

  const resizeFont = (rank: number) => {
    if (rank >= 1000 && rank < 100000) {
      return "text-xs tracking-tight py-3"
    } 
    if (rank >= 100000) {
      return "text-xs tracking-tighter py-3"
    }
  }

  const handleSeasonClick = (event:any) => {
    //output the option value 
    console.log(event.target.value)
  } 

  const getDifficulty = (level: number) => {
    switch(level){
      case 1: 
         return {
          "text": "VERY EASY", 
          "cssClass": "bg-spacey-leaderboard-very-easy"
         }
     case 2: 
         return {
          "text": "EASY", 
          "cssClass": "bg-spacey-leaderboard-easy"
         }
    case 3: 
         return {
          "text": "MEDIUM", 
          "cssClass": "bg-spacey-leaderboard-medium"
        }
    case 4: 
        return {
         "text": "HARD", 
         "cssClass": "bg-spacey-leaderboard-hard"
        }
    case 5: 
        return {
         "text": "VERY HARD", 
         "cssClass": "bg-spacey-leaderboard-very-hard"
        }
    case 6: 
        return {
         "text": "INSANE", 
         "cssClass": "bg-spacey-leaderboard-insane"
        }
    case 7: 
        return {
         "text": "IMPOSSIBLE", 
         "cssClass": "bg-spacey-leaderboard-impossible"
        }
    default: 
      return {
        "text": "VERY EASY", 
        "cssClass": "bg-spacey-leaderboard-very-easy"
      }
    }
  }

  /**
   * 
   * @param index used to determine the style. rank1 = 0, rank2 = 1, rank3 = 2, me = -1
   * @param position 
   * @returns 
   */
  const getStyle = (index:number, position:number = 1) => {
    if (index === 0){
      if (position === 0) 
        return leaderBoardStyle["rank1"] + " rounded-tl-lg"
      else if (position === 2)
         return leaderBoardStyle["rank1"] + " rounded-tr-lg"
      else return leaderBoardStyle["rank1"]

    }
    if (index === 1)
        return leaderBoardStyle["rank2"];
    if (index === 2)
        return leaderBoardStyle["rank3"];
    if (index === -1)
        return leaderBoardStyle["rank_me"];
      
    if (index % 2 === 1) 
        return leaderBoardStyle['rank_origin'];
    else return leaderBoardStyle["rank_grey"];
  }

if(records) {
  return (
    <div>
      <div className="mt-32 container mx-auto md:max-w-1064  ">
        <div className="flex flex-col md:flex-row text-center justify-center md:justify-between gap-4 md:gap-0">
            <div className="flex flex-row font-bankgothic text-4xl md:text-6xl ">
              <div>Leader Board</div>
              <div className=" w-8 md:w-12">
              <Image src={arrowIcon} layout="responsive" alt="arrow icon"/>
              </div>
            </div>
            <div className="flex flex-row font-bankgothic text-4xl md:text-5xl items-center  gap-4">
              <div>Claim</div>
              <div>
                <div className="flex flex-row bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer px-4 py-2  rounded-xl jutisfy-between gap-2  items-center"  onClick={(event) => {setClaim(claims['spray']); setClaimOpen(true); }}> 
                   <div className="w-4 md:w-8"><Image src={token} layout="responsive" alt="token Rounded" /></div>
                   <div className="text-base">SPRAY</div>
                 </div>
              </div>

            </div>
        </div>
      </div>
      <div className="gradientBackgroundFull my-5" >
        <div className="container mx-auto py-5 flex flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 ">
              <div className="flex flex-row">
                <div className="mr-2  text-lg">
                Leaderboard will be cleared every season. And seasonal rewards are distributed according to players&apos; leaderboard ranking.
                 </div>
               </div>
        </div>
      </div>
      <div>
        <div className="container  mx-auto py-3  flex flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 justify-between">
          <div className="flex flex-row">
            <div className="">
               <div>The prize pool contains 80% SPAY income of each season.
               </div>
               <div className="mt-2">
                Your seasonal rewards will be unlocked within 30 days (10% of total rewards every 3 days).
               </div>
            </div>
            <div className="w-16 md:w-8 ml-4 mt-4 cursor-pointer" onClick={(event) => {setInfoOpen(true)}} >
              <Image className="w-4 h-4" src={infoIcon} layout="responsive" alt="info icon"/>
            </div>
            </div>
       
              <div className="flex flex-row items-center ">
                  <div className="text-xl mr-4">
                    Year
                  </div>
                  <div className="text-xl px-3  mr-6">
                    <select className="bg-spacey-leaderboard-grey px-3 py-1" onChange={handleSeasonClick}>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
              </div>
            
        </div>
      </div>
      <div>
        <div className="container md:max-w-1064 mx-auto">
          <div className="grid grid-cols-17 gap-2 font-bankgothic pr-6 text-xs md:text-base">
            <div className="bg-spacey-leaderboard-grey text-center  py-2 rounded-xl col-span-1 self-end" >#</div>
            <div className="bg-spacey-leaderboard-grey rounded-xl py-2 pl-2 col-span-3 self-end">NAME</div>
            <div  className="bg-spacey-leaderboard-grey rounded-xl py-2 pl-2 col-span-3 self-end">WALLET</div>
            <div className="bg-spacey-leaderboard-grey  rounded-xl py-2 pl-2  col-span-3 self-end">SCORE</div>
            <div className="bg-spacey-leaderboard-grey rounded-xl py-2  col-span-4 self-end flex flex-row justify-between px-2">
              <div>
                WAVES
              </div>
              <div>
                DIFFICULTY
              </div>
            </div>
            <div className="col-span-3 bg-triangle-bg bg-spacey-leaderboard-grey  py-2 rounded-xl self-end bg-auto bg-no-repeat bg-left-top">

              <div className="ml-12 text-center md:text-xl text-xs">Reward</div>
              <div className="flex flex-row justify-evenly py-2">
                <div className="ml-4 w-4 md:w-8">
                   <Image src={token} layout="responsive" alt="token Rounded"/>
                </div>
             
              </div>
            </div>
          </div>
         
         <div className="overflow-y-scroll max-h-96 md:max-h-120 pr-2 mt-2 relative" id="leaderboard">
          {records.map(({rank, name, wallet, score, wave, token_rewards, difficulty_level}, id) => (
          <div className="grid grid-cols-17 gap-2 font-bankgothic text-xs md:text-base" key={id}>
            <div className={"text-center py-2 col-span-1 self-end " + getStyle(id, 0) } >{rank}</div>
            <div className={" py-2 pl-2 col-span-3 self-end "  + getStyle(id)}>{name}</div>
            <div  className={" py-2 pl-2 col-span-3 self-end " + getStyle(id)}>{wallet}</div>
            <div className={"py-2 pl-2 col-span-3 self-end " + getStyle(id)}>{score}</div>
            <div className={"flex flex-row justify-between py-2 px-2 col-span-4 self-end " + getStyle(id)}>
              <div className="w-8"> 
              {wave}
              </div>
              <div className={"rounded w-1/2 align-middle pt-1 text-xs px-2 text-center " + getDifficulty(difficulty_level).cssClass}>
                {getDifficulty(difficulty_level).text}
              </div>
            </div>
            <div className={"col-span-3 py-2 self-end bg-auto bg-no-repeat bg-left-top " + getStyle(id, 2)}>
              <div className="flex flex-row justify-evenly ">
                <div className="ml-4 w-4 md:w-8 ">
                  {token_rewards}
                </div>
          
              </div>
            </div>
            </div>
          ))}

           {/** my score section */}
           <div className="grid grid-cols-17 gap-2 font-bankgothic absolute bottom-0 sticky">
            <div className={"text-center py-2 col-span-1 self-end " + getStyle(-1) + " " + resizeFont(4555) } >4555</div>
            <div className={" py-2 pl-2 col-span-3 self-end "  + getStyle(-1)}>Winner Chan</div>
            <div  className={" py-2 pl-2 col-span-3 self-end " + getStyle(-1)}>******2345</div>
            <div className={"py-2 pl-2 col-span-3 self-end " + getStyle(-1)}>20</div>
     
            <div className={"flex flex-row justify-between py-2 px-2 col-span-4 self-end " + getStyle(-1)}>
            <div className="w-8"> 
                3
              </div>
              <div className={"rounded w-1/2 align-middle pt-1 text-xs px-2 text-center " + getDifficulty(2).cssClass}>
                {getDifficulty(2).text}
              </div>
            </div>
            <div className={"col-span-3 py-2 self-end bg-auto bg-no-repeat bg-left-top " + getStyle(-1)}>
              <div className="flex flex-row justify-evenly ">
                <div className="ml-4 w-4 md:w-8 ">
                 20
                </div>
           
              </div>
            </div>
            </div>
           {/** my score section end*/}
           </div>
        </div>
      </div>
      <ClaimModal open={isClaimOpen} handleOpen={setClaimOpen} claim={claim} />
      <InfoModal open={isInfoOpen} handleOpen={setInfoOpen} />
    </div>
  )
} else {
  return (
    <div>
      Loading
    </div>
  )
}
}

export default withLayout(LeaderBoard)
