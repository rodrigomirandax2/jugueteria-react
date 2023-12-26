import React from 'react'
import './ItemListContainer.css'

function ItemListContainer(props) {
  return (
    <p className='title'>{props.msg}</p>
  )
}

export default ItemListContainer