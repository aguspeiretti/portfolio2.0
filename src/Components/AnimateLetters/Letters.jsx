import React from 'react'
import "./Letters.scss"

const Letters = ({letterClass , strArray , idx}) => {
    console.log(strArray)
  return (
    <span>
        {
            strArray.map((char, i)=>(
                <span key={char + i} className={ `${letterClass} _${i + idx}`} >
                    {char}
                </span>
            ))
        }
    </span>
  )
}

export default Letters