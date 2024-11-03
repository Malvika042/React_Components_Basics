import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div>
      <div className='card' >
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1ENwTx5G0i1_MPdcniIv_AZ1S7BUYmIj73lC-jPjcO06Y1W43aIh9Z7mQBChbjdhA6s&usqp=CAU" alt = "" width="233"
        style={{border: "2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
