import React from 'react'

function Image(props) {
  return (
    <div>
        <img key={props.keyforimg} src={props.images}/>
        {console.log(props.images.webformatURL)}
    </div>
  )
}

export  {Image}