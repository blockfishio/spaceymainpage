

import React, {createRef, useEffect, useRef, useState} from "react";

interface Props {
    title: string
}

const Canvas = ({title}: Props) => {

    const canvasObj = createRef<HTMLCanvasElement>()
    const [imageUrl, setImage] =  useState("")

    useEffect(() => {
  
        if (!canvasObj.current)
          return 
        else {
         const canvasObject = canvasObj.current
         const ctx = canvasObj.current.getContext("2d")
         if (ctx) {

            const image = new Image()
            image.src = "../../images/ic_ticket@2x.png"

            image.onload = function() {
                canvasObject.width=image.width
                canvasObject.height=image.height

                ctx.drawImage(image, 0, 0, image.width, image.height)
                ctx.font= image.width / 35 + "px sans-serif"
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                
                ctx.fillText(title.toUpperCase(), image.width / 3 + title.length * 5 + 10, image.height / 3)
                //ctx.drawImage(newone,width*0.35,height*0.75,100,100)
                if (canvasObj.current) {
                    const url=canvasObj.current.toDataURL()
                    setImage(url)
                }
            }           
            // console.log(text)
         }
        }
       }
    )

    return (
        <div className="mx-auto">
           <canvas ref={canvasObj} className="w-full mx-auto" />
        </div>
    )
}

export default Canvas