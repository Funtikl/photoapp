import React from 'react'

function Image({image}) {
  return (
    <div>
        <img src={image.webformatURL}/>
        {console.log(image.webformatURL)}
    </div>
  )
}

export  {Image}