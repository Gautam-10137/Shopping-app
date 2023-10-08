import React from 'react'

const card = ({image,name,detail,price}) => {
     
  return (
    <div className='card'>
      <img alt="shoes" src={require(`../../assets/img/${image}`)}   className='imgshoe'></img>
      <h2>{name} </h2>
      <p>{detail}</p>
      <h2>Rs.{price}</h2>
    </div>
  )
}

export default card
